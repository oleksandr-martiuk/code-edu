class Visitor {
   accept(operation) {
      const methodName = `visit${this.constructor.name}`;
      if (!operation[methodName]) {
         throw new Error(`${methodName} is not acceptable`);
      }
      operation[methodName](this);
   }
}

class Person extends Visitor {
   constructor(name) {
      super();
      this.name = name;
   }
   getName(){
      console.log(`My name is ${this.name}`);
   }
}

class Man extends Person {
   repairCar(){
      console.log(`${this.name} is repairing his Ford`);
   }
}
class Woman extends Person {
   cookDinner(){
      console.log(`${this.name} is cooking Borsch for the dinner`);
   }
}

class VisitorDoes extends Visitor {
   visitMan(he){
      he.repairCar();
   }
   visitWoman(she){
      she.cookDinner();
   }
}

class VisitorRun extends Visitor {
   visitMan(person){
      console.log(`${person.name} is running very fast`)
   }
   visitWoman(person){
      console.log(`${person.name} is already tired. But she looks very well! :)`)
   }
}

class VisitorDance extends Visitor {
   visitMan(person){
      console.log(`${person.name} is dancing as an elephant ;)`)
   }
   visitWoman(person){
      console.log(`Oh I like ${person.name}'s movements! )`)
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const john = new Man('John');
const marry = new Woman('Marry');

// john.getName();
// john.repairCar();

const visitorRun = new VisitorRun();
john.accept(visitorRun);
marry.accept(visitorRun);

console.log('--------------------------------------------------');

const visitorDance = new VisitorDance();
john.accept(visitorDance);
marry.accept(visitorDance);

console.log('--------------------------------------------------');

const visitorDoes = new VisitorDoes();
john.accept(visitorDoes);
marry.accept(visitorDoes);
