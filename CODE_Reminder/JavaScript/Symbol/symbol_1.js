const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log(Symbol("foo") === Symbol("foo")); // false

try {
   const sym = new Symbol();
} catch (e) {
   console.log(e); // TypeError: Symbol is not a constructor
}

console.log(typeof Symbol());                // symbol
console.log(typeof Symbol('foo')); // symbol
console.log(typeof Symbol.iterator);         // symbol
