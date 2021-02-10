// Rest elements for array destructuring assignment:

const primes = [2, 3, 5, 7, 11];
const [first, second, ...rest] = primes;
console.log(first);        // 2
console.log(second);       // 3
console.log(rest);         // [5, 7, 11]

// Spread elements for array literals:

const primesCopy = [first, second, ...rest];
console.log(primesCopy);   // [2, 3, 5, 7, 11]
