/**
 * How would you implement a delay function?
 * The function receives the time to delay, and delays
 * the execution of the rest of the script by that delay time
 */

 // const delay = delayTime => {
//   // your code here
//   console.log(`delayed ${delayTime}ms`);
//   // your code here
// };

const delay = delayTime => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`delayed ${delayTime}ms`);
      resolve();
    }, delayTime);
  })
};

(async () => {
  console.log("a");
  await delay(1500);
  console.log("b");
})();
