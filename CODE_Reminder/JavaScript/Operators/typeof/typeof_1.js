console.log('1.', typeof undefined);                        // undefined
console.log('2.', typeof true);                             // boolean
console.log('3.', typeof 42);                               // number
console.log('4.', typeof 'some str');                       // string
console.log('5.', typeof 10n);                              // bigint
console.log('6.', typeof Symbol('some symbol'));   // symbol

console.log('7.', typeof {});                // object
console.log('8.', typeof function A(){});    // function
console.log('9.', typeof null);              // object
console.log('10.', typeof []);               // object
console.log('11.', typeof new Date());       // object
console.log('12.', typeof new Map());        // object
console.log('13.', typeof new WeakMap());    // object
