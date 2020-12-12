class Master {
   constructor(name) {
      this.disciples = [];
      this.name = name
   }
   accept(disciple) {
      if (!disciple.disciples.length) { // avoid recursion reference to the Master
         this.disciples.push(disciple);
      }
   }
   disconnect(disciple) {
      this.disciples = this.disciples.filter(d => d.name !== disciple.name);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// 1-st level
const igor = new Master('Igor');
// 2-nd level
const elise = new Master('Elise');
const lee = new Master('Lee');
// 3-rd level
const tim = new Master('Tim');
const denis = new Master('Denis');
// 4-th level
const otto = new Master('Otto');
// 5-th level
const serge = new Master('Serge');
const margo = new Master('Margo');
const john = new Master('John');

igor.accept(elise);
igor.accept(lee);
   elise.accept(tim);
   elise.accept(denis);
   lee.accept(denis);
      denis.accept(otto);
         otto.accept(serge);
         otto.accept(margo);
         otto.accept(john);
            otto.accept(igor);

elise.disconnect(denis);

console.log(igor);
