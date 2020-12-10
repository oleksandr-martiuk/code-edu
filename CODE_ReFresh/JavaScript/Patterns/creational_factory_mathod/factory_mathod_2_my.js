class QFactory {
   create(qType) {
      let quadcopter = {}

      if (qType === 'multi-rotors') {
         quadcopter = new MultiRotors();
      }
      else if (qType === 'single-rotor') {
         quadcopter = new SingleRotor();
      }
      else if (qType === 'fixed-wings') {
         quadcopter = new FixedWings();
      }

      quadcopter.getParameters = () => {
         console.log(`This is parts of '${quadcopter.type}' quadcopter:\n`);
         for (let name in quadcopter.parts) {
            const val = quadcopter.parts[name];
            console.log(`${name}: ${val}`);
         }
      }

      return quadcopter;
   }
}

class MultiRotors {
   constructor() {
      this.type = 'Multi Rotor';
      this.parts = { engine: 8, wings: 16 }
   }
}
class SingleRotor {
   constructor() {
      this.type = 'Multi Rotor';
      this.parts = { engine: 1, wings: 1 }
   }
}
class FixedWings {
   constructor() {
      this.type = 'Multi Rotor';
      this.parts = { engine: 4, wings: 4 }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const q = new QFactory();

const myQ = q.create('single-rotor');

myQ.getParameters();
