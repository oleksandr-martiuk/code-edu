const arr = [1, 2, 'Joe', 88, true];
const [a, b, ...rest] = arr;
console.log(a);
console.log(b);
console.log(rest);

const newArr = [a, b, ...rest];
console.log(newArr);
