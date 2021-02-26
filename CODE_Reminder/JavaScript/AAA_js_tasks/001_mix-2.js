'use strict';

// Hoisting

// var myName = "global";
//
// const hoisting = () => {
//   console.log(myName);
//   var myName = "local";
//   console.log(myName);
// }
//
// console.log(myName);
//
// hoisting();

//----------------------------------------------------------------------------------------------------------------------

// Closure

// const closure = () => {
//   for (var i = 0; i < 4; i++) {
//     setTimeout((a) => {
//       console.log(a);
//     }, 100, i);
//   }
// };
//
// closure();

//----------------------------------------------------------------------------------------------------------------------

// Event Loop

// const eventLoop = () => {
//   console.log(1);
//   setTimeout(() => console.log(2), 0);
//   Promise.resolve(3).then((res) => console.log(res));
//   console.log(4);
// };
//
// eventLoop();

//----------------------------------------------------------------------------------------------------------------------

// Async Event Loop

// const asyncEvent = async () => {
//   console.log(1);
//   setTimeout(() => console.log(2), 0);
//   await Promise.resolve(3).then((res) => console.log(res));
//   console.log(4);
// };
//
// asyncEvent();

//----------------------------------------------------------------------------------------------------------------------

// Unique array

// => [1, 2, 3, 4]
// const unique = [1, 2, 1, 1, 2, 1, 3, 4, 1];
// const uniqueNums = [...Set(unique)];

//----------------------------------------------------------------------------------------------------------------------

// Merge array of objects
// // =>  { a: 1, b: 2, c: 3 }

// const merge = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const acc = merge.reduce((item, acc) => ({...item, ...acc}), {}); // implementation

//----------------------------------------------------------------------------------------------------------------------

// Remove Property 'useless'

// const removeProperty = {
//   foo: "bar",
//   useful: 1,
//   useless: 2
// };
//
// const removeProp = ({ useless, ...rest }) => rest; // implementation

//----------------------------------------------------------------------------------------------------------------------

// Array to Object
// => { 1: 2, 2: 1, 3: 1, a: 2, b: 1 }

// const arr = ["a", 1, "a", "b", 1, 2, 3];
//
// const obj = arr.reduce((acc, el) => {
//    if (acc[el]) acc[el]++;
//    else acc[el] = 1;
//
//    return acc;
// }, {});
