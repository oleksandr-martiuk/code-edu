class Sportsman {
   constructor({ jump = 0, kick = 0, swim = 0, run = 0 }, type) {
      this.type = type;
      this.averResult = { jump, kick, swim, run };
   }
   setNext (sportsman) {
      if (!this.nextSportsman) this.nextSportsman = sportsman;
   }
   overcomeChallenge(name, value) {
      if (this.averResult[name] >= value) {
         console.log(`${this.type} can ${name} to the value of "${value}"`);
      }
      else if (this.nextSportsman && this.averResult[name] < value) {
         console.log(`${this.type} can't overcome ${name}-challenge`);
         this.nextSportsman.overcomeChallenge(name, value);
      } else {
         console.log(`No one sportsman can ${name} to the value of "${value}"`);
      }
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Jumper extends Sportsman {
   constructor(jump) {
      super({ jump }, 'Jumper');
   }
}
class Runner extends Sportsman {
   constructor(run) {
      super({ run }, 'Runner');
   }
}
class Boxer extends Sportsman {
   constructor(kick) {
      super({ kick }, 'Boxer');
   }
}
class Swimmer extends Sportsman {
   constructor(swim) {
      super({ swim }, 'Swimmer');
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const jumper = new Jumper(30);
const runner = new Runner(15);
const boxer = new Boxer(50);
const swimmer = new Swimmer(20);

jumper.setNext(runner);
runner.setNext(swimmer);
swimmer.setNext(boxer);

jumper.overcomeChallenge('kick', 10);
