class QFactory {
   create(qType) {
      let quadcopter = {}

      if (qType === 'single-rotor')       quadcopter = new SingleRotor();
      else if (qType === 'fixed-wings')   quadcopter = new FixedWings();
      else if (qType === 'multi-rotors')  quadcopter = new MultiRotors();

      quadcopter.getParameters = () => console.log('Drone parts: ', quadcopter.parts);

      return quadcopter;
   }
}

class SingleRotor {
   constructor() {
      this.parts = { engine: 1, wings: 1 }
   }
}
class FixedWings {
   constructor() {
      this.parts = { engine: 4, wings: 4 }
   }
}
class MultiRotors {
   constructor() {
      this.parts = { engine: 8, wings: 16 }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const q = new QFactory();

const myQ = q.create('fixed-wings');
myQ.getParameters();
