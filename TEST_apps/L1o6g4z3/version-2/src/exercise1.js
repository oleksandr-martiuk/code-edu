/**
 * Here is a snippet that logs several messages to the console.
 * Please answer the questions below in the designated space.
 *
 * 1. What will be the output? Why?
 *    Answer:
 * 2. Fix the function so the for-loop part will print 1,2,3.
 */

const logMessages = () => {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
  console.log("aaa");
};

logMessages()

// ---------------------------------------------------------------------------------------------------------------------
// Response:
// aaa
// 3
// 3
// 3
// ---------------------------------------------------------------------------------------------------------------------
// TODO v.1
// const logMessages = () => {
//   for (let i = 1; i <= 3; i++) {
//     setTimeout(() => console.log(i), 0);
//   }
//   console.log("aaa");
// };
// ---------------------------------------------------------------------------------------------------------------------
// TODO v.2
// const logMessages = () => {
//   for (var i = 1; i <= 3; i++) {
//     setTimeout((a) => console.log(a), 0, i);
//   }
//   console.log("aaa");
// };
// ---------------------------------------------------------------------------------------------------------------------

// TODO: Write explanation here
