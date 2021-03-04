/**
 * `fetchThrottledData` is a function that continuously fetching data using `getData` into an array.
 *
 * It should make sure that no more than 1 call of `getData` is active.
 * Naively it would be implemented like below.
 *
 * Please answer the questions below.
 */

const getData = () =>
   new Promise((resolve) =>
      setTimeout(() => resolve(Math.random() * 5), Math.random() * 2000)
   );

const fetchThrottledData = async () => {
  const arrOfData = [];
  let allowed = true;
  let timer = 0;

  const intervalId = setInterval(async () => {
    if (++timer === 60) {
      allowed = false;
      clearInterval(intervalId);
    }

    if (allowed) {
      allowed = false;
      const data = await getData();
      arrOfData.push(data);
      allowed = true;
    }
  }, 1000);
};

/**
 * Questions:
 * 1. Can you spot the bug in this implementation?
 *    Answer:
 *    "setInterval" calls the "getData" function each second, but "getData" finishes executing randomly in the range of 2 seconds. So sometimes happens when the first call of function "getData" hasn't returned the result yet, and the second call of the "getData" is already finished.
 *    Bug of implementation: 2 calls of "getData" are working simultaneously, which is forbidden by the task condition
 * 2. Fix the implementation to reach the desired outcome.
 * 3. Add logic to stop the task from re-occurring after 1 minute of `fetchThrottledData`'s run?
 */
