class Memento {
   constructor(value) {
      this.value = value;
   }
}

const creator = {
   save: val => new Memento(val),
   restore: memento => memento.value
}

class CareTaker {
   constructor() {
      this.values = [];
   }
   addMemento(memento) {
      memento && memento.value && this.values.push(JSON.stringify(memento.value));
   }
   getMemento(index) {
      return JSON.parse(this.values[index]);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Life {
   constructor(time) {
      this.timeValue = time;
   }
   get time() {
      return this.timeValue;
   }
   set time(value) {
      this.timeValue = value;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const careTaker = new CareTaker();
const life = new Life(1000);

careTaker.addMemento(creator.save()); // randomly skipped add memento
life.time = 3000;
careTaker.addMemento(creator.save(life));
life.time = 5000;
careTaker.addMemento(creator.save(life));

console.log(careTaker.getMemento(0));
