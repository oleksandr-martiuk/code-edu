// EXPLANATION:
//      > 1. отрезаем от 'такого-то' куска остаток
//      > 2. вырезаем кусок 'от' и 'до'

// * doesn't change an array

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'wolf', 'cat', 'dog'];

console.log(animals.slice(2));      // [ 'camel', 'duck', 'elephant' ]
console.log(animals.slice(1, 3));   // [ 'bison', 'camel' ]
