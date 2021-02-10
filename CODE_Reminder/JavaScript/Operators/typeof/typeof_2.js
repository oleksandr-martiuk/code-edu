// Numbers
console.log('01.', typeof 37);                     // number
console.log('02.', typeof 3.14);                   // number
console.log('03.', typeof(42));                    // number
console.log('04.', typeof Math.LN2);               // number
console.log('05.', typeof Infinity);               // number
console.log('06.', typeof NaN);                    // number (Despite being "Not-A-Number")
console.log('07.', typeof Number('1'));      // number (Number tries to parse things into numbers)
console.log('08.', typeof Number('shoe'));   // number (including values that cannot be type coerced to a number)

console.log('09.', typeof 42n);                    // bigint

// Strings
console.log('10.', typeof '');                     // string
console.log('11.', typeof 'bla');                  // string
console.log('12.', typeof `template literal`);     // string
console.log('13.', typeof '1');                    // string (note that a number within a string is still typeof string)
console.log('14.', typeof (typeof 1));             // string (typeof always returns a string)
console.log('15.', typeof String(1));        // string (String converts anything into a string, safer than toString)

// Booleans
console.log('16.', typeof true);                   // boolean
console.log('17.', typeof false);                  // boolean
console.log('18.', typeof Boolean(1));       // boolean (Boolean() will convert values based on if they're truthy or falsy)
console.log('19.', typeof !!(1));                  // boolean (two calls of the ! (logical NOT) operator are equivalent to Boolean())

// Symbols
console.log('20.', typeof Symbol());               // symbol
console.log('21.', typeof Symbol('foo')); // symbol
console.log('22.', typeof Symbol.iterator);        // symbol

// Undefined
console.log('23.', typeof undefined);              // symbol
console.log('24.', typeof declaredButUndefinedVariable); // symbol
console.log('25.', typeof undeclaredVariable);     // symbol

// Objects
console.log('26.', typeof {a: 1});                 // object

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
console.log('27.', typeof [1, 2, 4]);              // object

console.log('28.', typeof new Date());             // object
console.log('29.', typeof /regex/);                // object (See Regular expressions section for historical results)

// The following are confusing, dangerous, and wasteful. Avoid them.
console.log('30.', typeof new Boolean(true)); // object
console.log('31.', typeof new Number(1));     // object
console.log('32.', typeof new String('abc')); // object

// Functions
console.log('33.', typeof function() {});          // function
console.log('34.', typeof class C {});             // function
console.log('35.', typeof Math.sin);               // function
