class CarOriginator {
   constructor(brand, year) {
      this.brand = brand;
      this.year = year;
      this.engineVolume = 22;
   }
   getBrand = () => console.log(`This is ${this.brand}`);
   getEngineVolume = () => console.log(`The volume of such engine is ${this.engineVolume} of cubic centimetres`)
}

class CareTaker {
   constructor() {
      this.values = {};
   }
   addMemento(key, originator) {
      this.values[key] = { ...originator };
   }
   restoreMemento(key, originator) {
      const memento = this.values[key];
      if (memento) {
         Object.keys(memento).forEach(key => (originator[key] = memento[key]));
         Object.keys(originator).forEach(key => !memento[key] && delete originator[key]);
      }
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const kama = new CarOriginator('Kama', 1998);
const zil = new CarOriginator('Zil', 2003);

const careTaker = new CareTaker();

careTaker.addMemento('kama', kama);
careTaker.addMemento('zil', zil);

kama.doors = 2;
kama.getDoorsAmount = () => console.log(`${this.brand} has ${this.doors} doors`);
kama.getEngineVolume = () => console.log(`---not response---`);

//-----------------------------------------------------------------------------------

try {
   zil.getEngineVolume();
   kama.getEngineVolume();
   console.log('------------------------------------------------------------------');
   careTaker.restoreMemento('kama', kama);
   kama.getEngineVolume();
   kama.getDoorsAmount();
} catch (e) {
   console.log('ERROR: ', e.message);
}
