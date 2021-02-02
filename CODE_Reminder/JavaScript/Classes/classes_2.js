'use strict';

class MyClass {
   constructor() {
      this.person = {};
   }
   addName(name) {
      this.person.name = name;
   }
   removeName() {
      delete this.person.name;
   }
   showName() {
      console.log(this.person.name);
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const myClass = new MyClass();

myClass.addName('Joe');
myClass.showName(); // Joe
myClass.removeName();
myClass.showName(); // undefined
