function maxDifference(arr) {
   let maxDiff = -1;
   let min = arr[0];

   if (!Array.isArray(arr)) return maxDiff;

   for(let item of arr.slice(1)) {
      if (item > min && maxDiff < item - min) {
         maxDiff = item - min;
      }
      if (item < min) min = item;
   }

   return maxDiff;
}

console.log(maxDifference([5, 3, 6, 7, 4]));                // 4
console.log(maxDifference([1, 2, 3]));                      // 2
console.log(maxDifference(3, 2, 1));                        // -1
console.log(maxDifference([2, 3, 10, 2, 4, 8, 1]));         // 8
console.log(maxDifference([7, 9, 5, 6, 3, 2]));             // 2
console.log(maxDifference([22, 2, 4, 5, 6, 444, 1, 666]));  // 665
console.log(maxDifference([7, 9, 5, 6, 3, 2]));             // 2
console.log(maxDifference([666, 555, 444, 33, 22, 23]));    // 1
console.log(maxDifference([2, 3, 10, 2, 4, 8, 1]));         // 8
