const arr = [2, 3, 5, 2, 5, 5, 5, 3, 2];

const acc = {};
arr.forEach(item => acc[item] ? ++acc[item] : (acc[item] = 1));
console.log(acc);
console.log('-----------------------------------------------');

const sortedValues = Object.entries(acc).sort((a, b) => (b[1] - a[1]));
const result = sortedValues[0][0];

console.log(sortedValues);
console.log(result);
