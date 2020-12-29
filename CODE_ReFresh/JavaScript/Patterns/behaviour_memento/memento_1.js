class Person {
   constructor(name, street, city, state) {
      this.name = name;
      this.street = street;
      this.city = city;
      this.state = state;
   }
   hydrate() {
      return JSON.stringify(this);
   }
   dehydrate(memento) {
      if (!memento) {
         console.log(`Memento for such key does not exist`);
      } else {
         const m = JSON.parse(memento);
         this.name = m.name;
         this.street = m.street;
         this.city = m.city;
         this.state = m.state;
         console.log(this);
      }
   }
}

class CareTaker {
   constructor() {
      this.mementos = {};
   }
   add(key, memento) {
      this.mementos[key] = memento;
   }
   get = function(key) {
      return this.mementos[key] || null;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
const john = new Person("John Yu", "48th Street", "San Jose", "CA");

// save state
const caretaker = new CareTaker();
caretaker.add('mike', mike.hydrate());
caretaker.add('john', john.hydrate());

// mess up their names
mike.name = "King Kong";
john.name = "Superman";

// restore original state
john.dehydrate(caretaker.get('mike'));
mike.dehydrate(caretaker.get(2));
mike.dehydrate(caretaker.get('john'));
