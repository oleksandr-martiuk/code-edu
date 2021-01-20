// TODO: should be improved

// class CareTaker {
//    constructor() {
//       this.values = {};
//    }
//    add(key, value) {
//       if (key && value) this.values[key] = { ...value };
//    }
//    get = key => this.values[key];
// }
//
// class PersonOriginator {
//    constructor(firstName, secondName, age, sex, city) {
//       this.firstName = firstName;
//       this.secondName = secondName;
//       this.age = age;
//       this.city = city;
//       this.sex = sex;
//    }
//
//    getFullName = () => `${this.firstName} ${this.secondName}`;
//    getSexCall = () => this.sex === 'man' ? 'he' : 'she';
//    getInfo = () => `${this.getFullName()} is ${this.age} years old and ${this.getSexCall()} is used to leave in ${this.city}.`;
//
//    createMemento = careTaker => careTaker.add('person', this);
//    getMemento = careTaker => careTaker.get('person');
// }
//
// /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//
// const careTaker = new CareTaker();
//
// const joe = new PersonOriginator('Joe', 'Black', 35, 'Seattle', 'man');
// const alina = new PersonOriginator('Alina', 'Shoo', 21, 'California', 'woman');
//
// joe.createMemento(careTaker);
// joe.firstName = 'Test';
//
// console.log(joe.getFullName());
//
// const joeMemento = joe.getMemento(careTaker);
// console.log(joeMemento.getFullName());
