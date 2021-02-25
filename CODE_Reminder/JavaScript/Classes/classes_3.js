const greetings = () => {
   return (name) => `Hello dear friend` + (name ? ` ${name}` : ``);
}

class Somebody {
   constructor(name) {
      this.name = name;
   }

   // ran on initialization of class (before constructor) ---> Hello dear friend
   // this.name does not make sense
   hello = greetings()(this.name);

   doHello = greetings();

   sayHello = () => `${this.hello} ${this.name}`;
}

const ban = new Somebody('Ban');

console.log(ban.hello);                   // Hello dear friend
console.log(ban.sayHello());              // Hello dear friend Ban
console.log(ban.doHello('John'));   // Hello dear friend John
