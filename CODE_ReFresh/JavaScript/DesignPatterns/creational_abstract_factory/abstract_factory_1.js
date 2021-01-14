class Sedan {
   constructor(tmName) {
      this.tmName = tmName;
      this.type = 'sedan';
   }
   create() {
      //..complex logic of creating Sedan
      console.log(`Create ${this.tmName}${this.type.toUpperCase()}`);
   }
}

class Coupe {
   constructor(tmName) {
      this.tmName = tmName;
      this.type = 'coupe';
   }
   create() {
      //..complex logic of creating Coupe
      console.log(`Create ${this.tmName}${this.type.toUpperCase()}`);
   };
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class ToyotaCoupe extends Coupe {
   constructor() {
      super('Toyota');
   }
}

class ToyotaSedan extends Sedan {
   constructor() {
      super('Toyota');
   }
}

class FordCoupe extends Coupe {
   constructor() {
      super('Ford');
   }
}

class FordSedan extends Sedan {
   constructor() {
      super('Ford');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class CarsFactory {
   createSedan(){
      throw new Error('CreateSedan() method is not defined');
   };
   createCoupe() {
      throw new Error('CreateSedan() method is not defined');
   };
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class ToyotaFactory extends CarsFactory {
   createSedan() {
      return new ToyotaSedan();
   }
   createCoupe() {
      return new ToyotaCoupe();
   }
}

class FordFactory extends CarsFactory {
   createSedan() {
      return new FordSedan();
   }
   createCoupe() {
      return new FordCoupe();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const factory = new ToyotaFactory();
const car = factory.createSedan(); // Creating instance of 'ToyotaSedan'
car.create();
