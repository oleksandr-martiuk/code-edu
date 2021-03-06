const personPrototype = {
   sayHi: function() {
      console.log("Hello, my name is " + this.name + ", and I am " + this.age);
   },
   sayBye: function() {
      console.log("Bye Bye!");
   }
};

function Person(name, age) {
   name = name || "John Doe";
   age = age || 26;

   function constructorFunction(name, age) {
      this.name = name;
      this.age = age;
   }

   constructorFunction.prototype = personPrototype;

   const instance = new constructorFunction(name, age);
   return instance;
}

const person1 = Person();
const person2 = Person("Bob", 38);

// prints out Hello, my name is John Doe, and I am 26
person1.sayHi();
// prints out Hello, my name is Bob, and I am 38
person2.sayHi();
