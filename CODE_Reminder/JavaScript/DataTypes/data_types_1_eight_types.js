// TODO: JS has 8 data types

/**
 * Primitive types:
 */

// 1. Number

let n = 123;
n = 12.345;
console.log(typeof n); // number

// Related to the Number types: "Infinity", "-Infinity", "NaN"
console.log(1/0); // Infinity
console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log('not a number' / 2); // NaN

// Math operations in JavaScript are "safe". We can do anything: divide by zero, treat non-numeric strings like numbers, etc.
// The script will never stop with a fatal error (will not "die"). In the worst case, we get NaN as a result of the execution.
/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 2. BigInt

const bigint = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10); // the same with 10n

console.log(typeof bigint); // bigint

// BigInt type allows arbitrary length integers.
// Sometimes we need really gigantic numbers, for example in cryptography or when using a timestamp with microseconds.
/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 3. String

let name = "Ivan";

console.log(typeof name); // string
/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 4. Boolean

let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4 > 1; // true

console.log(typeof isGreater); // boolean
/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 5. Null

let age = null;

console.log(typeof age); // object

console.log(null == null); // true
console.log(null === null); // true
/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 6. Undefined

let some;
console.log(some); // "undefined"

console.log(typeof some); // undefined
/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 7. Symbol

const symbol = Symbol('id');

console.log(typeof symbol); // symbol
/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/**
 * "Object" is complex type. It keeps collection of data and other data structures
 */

// 8. Object

const obj = { name: 'Joe', age: 33 }

console.log(typeof obj); // object
