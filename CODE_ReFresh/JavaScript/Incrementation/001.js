// Diff between ++x & x++:

let x = 99;
let y = 444;

y = x++; // First: assign x to y: y = 99. Then increase x to 1: x = 99 + 1 = 100
console.log('y = ', y);
console.log('x = ', x);
console.log('--------');

// ---------------------------------------------------------------------------------------------------------------------

x = 0;
y = 15;

y = ++x; // First: increase x to 1: x = 0 + 1 = 1. Then assign x to y: y = 1.
console.log('y = ', y);
console.log('x = ', x);
