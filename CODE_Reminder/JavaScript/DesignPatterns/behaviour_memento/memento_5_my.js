// generic 'CareTaker'
class CareTaker {
   constructor() {
      this.values = {};
   }
   add = (key, value) => key && value && (this.values[key] = { ...value });
   get = (key) => ({ ...this.values[key] });
   restore = (key, originator) => {
      const memento = this.values[key];
      Object.keys(originator).forEach(originKey => !memento[originKey] && (delete originator[originKey]));
      Object.keys(memento).forEach(mementoKey => originator[mementoKey] && (originator[mementoKey] = memento[mementoKey]));
   }
}

// generic 'SnapshotMethods'
class SnapshotMethods {
   constructor(key) {
      this.key = key;
   }
   createMemento = (careTaker, key) => careTaker.add(key || this.key, this);
   getMemento = (careTaker, key) => careTaker.get(key || this.key);
   restoreMemento = (careTaker, key) => careTaker.restore(key || this.key, this);
}

// originator
class PersonOriginator extends SnapshotMethods {
   constructor(firstName, secondName, age, sex, city) {
      super('person');
      this.firstName = firstName;
      this.secondName = secondName;
      this.age = age;
      this.city = city;
      this.sex = sex;
   }

   getFullName = () => `${this.firstName} ${this.secondName}`;
   getCall = () => this.sex === 'man' ? 'he' : 'she';
   getInfo = () => `${this.getFullName()} is ${this.age} years old and ${this.getCall()} is used to leave in ${this.city}.`;
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const careTaker = new CareTaker();

const joe = new PersonOriginator('Joe', 'Black', 35, 'Seattle', 'man');
const alina = new PersonOriginator('Alina', 'Shoo', 21, 'California', 'woman');

//---------------------------------------------------------------------

joe.createMemento(careTaker);

joe.firstName = 'Default';
joe.secondName = 'Test';
joe.getFullName = function() {
   return `This is ${this.firstName} ${this.secondName}... Hi friend!`;
}
joe.createMemento(careTaker, 'test');
const testDefault = joe.getMemento(careTaker, 'test');

console.log('1. ', joe.getFullName());

joe.restoreMemento(careTaker);
console.log('2.1. (joe)', joe.getFullName());
console.log('2.2. (testDefault)', testDefault.getFullName());

joe.restoreMemento(careTaker, 'test');
console.log('3.', joe.getFullName());

//---------------------------------------------------------------------

alina.createMemento(careTaker);

alina.firstName = 'Suzanna';
console.log('4.', alina.getFullName());

alina.restoreMemento(careTaker);
console.log('5.', alina.getFullName());
