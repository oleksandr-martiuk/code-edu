/**
 * Here is a snippet that logs several messages to the console.
 * Please answer the questions below in the designated space.
 *
 * 1. What will be the output? Why?
 *    Answer:
 * 2. Fix the function so the for-loop part will print 1,2,3.
 */

export const logMessages = () => {
   for (var i = 1; i <= 3; i++) {
      setTimeout(() => console.log(i), 0);
   }
   console.log("aaa");
};
