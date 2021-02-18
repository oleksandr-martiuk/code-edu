const nums = [175, 50, 25];

const debug = [];
const result = nums.reduce((acc, value, index) => {
    debug.push({acc, index, value});
    return acc + value;
}, 1000)

console.table(debug);
console.log(result + '\n');

//--------------------------------------------------------------------------

const debug2 = [];
const result2 = nums.reduce((acc, value, index) => {
    debug2.push({acc, index, value});
    return acc + value;
})

console.table(debug2);
console.log(result2 + '\n');

//--------------------------------------------------------------------------

