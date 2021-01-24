// https://www.smashingmagazine.com/2019/07/essential-guide-javascript-newest-data-type-bigint/

console.log(9007199254740992 === 9007199254740993);     // true (notice last digit)
console.log(9999999999999999);                          // 10000000000000000

console.log(9007199254740995n);                         // 9007199254740995n
console.log(9007199254740995);                          // 9007199254740996
console.log(BigInt("9007199254740995"));                // 9007199254740995n

// BigInt literals can also be written in binary, octal or hexadecimal notation:
// binary:
console.log(0b100000000000000000000000000000000000000000000000000011n); // 9007199254740995n

// hex:
console.log(0x20000000000003n);                         // 9007199254740995n

// octal:
console.log(0o400000000000000003n);                     // 9007199254740995n

// !!! note that legacy octal syntax is not supported
// console.log(0400000000000000003n);                   // → SyntaxError
