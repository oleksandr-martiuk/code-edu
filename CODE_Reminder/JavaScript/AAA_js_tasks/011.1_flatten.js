const arr = [[1, 2], 88, 99, [44, [77, [55, 1], 'bill'], 33, 2]];

// -------------------------------------------------------------------------------
// Works just for array of numbers:
const result_1 = arr.toString().split(',').map(item => +item);
console.log(result_1)

// -------------------------------------------------------------------------------
const flatten = (arr) => arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
}, []);

const result_2 = flatten(arr);
console.log(result_2)
