const a = { duration: 50 };

// TODO: check later (current Error [09 Feb 2021]: "SyntaxError: Unexpected token '??='")

a.duration ??= 10;
console.log(a.duration);
// expected output: 50

a.speed ??= 25;
console.log(a.speed);
// expected output: 25
