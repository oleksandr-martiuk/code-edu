const arr = [2, 3, 5, 2, 3, 2];

const obj = {};
arr.forEach(item => obj[item] ? ++obj[item] : (obj[item] = 1));

const objValues = Object.entries(obj);
const sortedValues = objValues.sort((a, b) => (b[1] - a[1]));
const result = sortedValues[0][0];

console.log(sortedValues);
console.log(result);
