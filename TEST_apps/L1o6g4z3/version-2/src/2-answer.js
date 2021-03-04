/**
 * Implement a delay function;
 * The function receives the time to delay, and delays
 * the next command by the delay time
 */
export const delay = (delayTime) => {
   return new Promise(resolve => {
      setTimeout(() => resolve(), delayTime);
   })
};
