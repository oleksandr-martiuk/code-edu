// 'start' - The index at which to start changing the array.

// 'deleteCount' (Optional) -   An integer indicating the number of elements in the array
//                              to remove from start.

// 'item1, item2, ...' (Optional) - The elements to add to the array, beginning from start.
//                                  If you do not specify any elements, splice() will only
//                                  remove elements from the array.

// (!) changes an array

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];

// console.log(nums.splice(7))         // [ 8, 9, 10, 11, 12, 13 ]
// console.log(nums);                  // [ 1, 2, 3, 4, 5, 6, 7 ]

// console.log(nums.splice(3, 6));     // [ 4, 5, 6, 7, 8, 9 ]
// console.log(nums);                  // [ 1, 2, 3, 10, 11, 12, 13 ]

// console.log(nums.splice(3, 6, 97, 98, 99, 100));    // [ 4, 5, 6, 7, 8, 9 ]
// console.log(nums);                  // [1, 2, 3, 97, 98, 99, 100, 10, 11, 12, 13]
