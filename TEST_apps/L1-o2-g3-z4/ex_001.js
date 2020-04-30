/**
 * Here is a snippet using a `setTimeout` function.
 * Please answer the questions below in the designated space.
 */

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
console.log("aaa");

/**
 * Questions:
 * 1. What will be the output? Why?
 * 2. How will you fix it to print 1,2,3;
 *    Please write the implementation below the comment block.
 */
/**
 * Your answers here:
 * 1. Answer will be:
 * 
 *    aaa
 *    3
 *    3
 *    3
 * 
 *    Explanation:
 *    1-st step) loop 'for' start working and setTimeout moves inner arrow function to the WebApi
 *    2-nd step) loop 'for' finish with last value of i = 3 from the closure of loop
 *    3-rd step) console.log('aaa') runs and show 'aaa'
 *    4-th step) arrow function  returns 3, 3, 3 because 'i' closured with last value equal 3 
 * 
 * 2. There are some solutions:
 *    a) we can use syntax 'let' instead of 'var' for variable 'i' of 'foor' loop that doesn't have access to the context 'this'
 *    b) we can add 'Immediately-Invoked Function Expression' for creating closure inside of setTimeout callback functions
 */

// // 1-st solution:
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// console.log("aaa");

// // 2-nd solution:
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function (y) {
//     return () => console.log(y);
//   }(i), 0);
// }
// console.log("aaa");
