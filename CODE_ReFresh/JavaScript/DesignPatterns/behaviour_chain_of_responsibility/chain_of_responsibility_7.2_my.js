const UOM = {
   punch: 'times/second',
   swim: 'meters/minute',
   run: 'meters/minute',
   jump: 'meters'
}

class Sportsman {
   constructor(skills, type) {
      this.type = type;
      this.skillResults = { punch:5, swim:70 , run:400 , jump:8, ...skills };
   }

   setNext (sportsman) {
      if (!this.nextSportsman) this.nextSportsman = sportsman;
   }

   overcomeChallenge(name, value) {
      const uom = this.getUOM(name);
      if (!uom) return;

      if (this.skillResults[name] && this.skillResults[name] >= value) {
         console.log(`${this.type} can ${name} "${value} ${uom}"`);
      }
      else if (this.nextSportsman) {
         this.nextSportsman.overcomeChallenge(name, value);
      } else {
         console.log(`No one can ${name} "${value} ${uom}"`);
      }
   }

   getUOM = sport => UOM[sport];
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Jumper extends Sportsman {
   constructor(skills) {
      super(skills, 'Jumper');
   }
}
class Runner extends Sportsman {
   constructor(skills) {
      super(skills, 'Runner');
   }
}
class Boxer extends Sportsman {
   constructor(skills) {
      super(skills, 'Boxer');
   }
}
class Swimmer extends Sportsman {
   constructor(skills) {
      super(skills, 'Swimmer');
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const jumper = new Jumper({ jump:13 });
const runner = new Runner({ run:700 });
const boxer = new Boxer({ punch:12 });
const swimmer = new Swimmer({ swim:115 });

jumper.setNext(runner);
runner.setNext(swimmer);
swimmer.setNext(boxer);

jumper.overcomeChallenge('punch', 10);
jumper.overcomeChallenge('swim', 15);
swimmer.overcomeChallenge('run', 600); // challenge can't be overcome because we have started from 'swimmer'
jumper.overcomeChallenge('hit the ball', 55);
