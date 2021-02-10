function A() {}
function B() {}

const a1 = new A();

console.log('a1 instanceof A: ', a1 instanceof A); // true
console.log('a1 instanceof B:', a1 instanceof B);  // false

//---------------------------------------------------------

A.prototype = new B();
const a2 = new A();

console.log('a2 instanceof B:', a2 instanceof B);  // true
