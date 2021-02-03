const arr1 = [1, 2];
const arr2 = ['Joe', 'Linda'];

const arr3 = arr1.concat(arr2);
console.log(arr3);

arr1[1] = 'Bob';

console.log(arr1);
console.log(arr3); // not changed
