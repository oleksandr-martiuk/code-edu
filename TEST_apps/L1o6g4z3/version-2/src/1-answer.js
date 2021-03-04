/**
 * Here is a snippet that logs several messages to the console.
 * Please answer the questions below in the designated space.
 *
 * 1. What will be the output? Why?
 *    Answer:
 *    aaa
 *    4
 *    4
 *    4
 *
 *    Description:
 *    1. When  the script just started:
 *       > the 'for' loop will run and the variable 'i' that has been declared by 'var' will be written in the outer lexical environment
 *          > on each iteration of the for-loop:
 *             > 'i' will be increased by 1 each time (at the end of for-loop variable 'i' is equal 4)
 *             > 3 timeouts will be started (with callbacks) and moved working in some web Api and immediately into the queue (because each timeout pause for 0 ms), which will wait for the stack to be cleaned
 *       > at the end of the script will be executed console.log with value 'aaa'
 *    2. (stack is empty) 3 callbacks are calling from the queue one by one with a call of the log that returns the variable 'i' (that is equal 4)
 *
 * 2. Fix the function so the for-loop part will print 1,2,3.
 */

export const logMessages = () => {
   for (let i = 1; i <= 3; i++) {
      setTimeout(() => console.log(i), 0);
   }
   console.log("aaa");
};
