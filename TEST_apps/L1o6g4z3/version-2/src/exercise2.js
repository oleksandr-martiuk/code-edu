/**
 * Implement a delay function;
 * The function receives the time to delay, and delays
 * the next command by the delay time
 */
console.log('start');
const delay = (delayTime) => {
   return new Promise(resolve => {
      setTimeout(() => {
         return resolve();
      }, delayTime);
   })
};

delay(2000)
   .then(r => console.log('finish'));
