let a = 1;
let b = 0;

// TODO: check later (current Error [09 Feb 2021]: "SyntaxError: Unexpected token '&&='")

a &&= 2;
console.log(a);
// expected output: 2
b &&= 2;
console.log(b);
// expected output: 0
