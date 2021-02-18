const fibonacci = num => {
    if(num < 2) return num

    return fibonacci(num - 1) + fibonacci(num - 2)
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

console.log(fibonacci(3));  // 2
//                 3
// ----------------------------------
//         2               *1
// ----------------------------------
//     *1       0

console.log(fibonacci(5));  // 2
console.log(fibonacci(7));  // 13
console.log(fibonacci(9));  // 34
