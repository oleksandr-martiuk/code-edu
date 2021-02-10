const sym = Symbol("foo");

console.log(typeof sym);               // "symbol"

const symObj = Object(sym);

console.log(typeof symObj);            // "object"
