/**
 * `fetchThrottledData` is a function that continuously fetching data using `getData` into an array.
 *
 * It should make sure that no more than 1 call of `getData` is active.
 * Naively it would be implemented like below.
 *
 * Please answer the questions below.
 */

let i = 0;

const getData = () =>
  new Promise((resolve) =>
    setTimeout((a) => {
      console.log(a);
      return resolve(Math.random() * 5);
    }, Math.random() * 2000, ++i)
  );

const fetchThrottledData = async () => {
  const arrOfData = [];
  let allowed = true;
  let timer = 0;

  const setAllowed = value => (allowed = value);

  const id = setInterval(async () => {
    if (allowed) {
      setAllowed(false);
      const data = await getData();
      arrOfData.push(data);
      setAllowed(true);
      // console.log(data);
    }
    // console.log('...sec...', allowed, (new Date()).getSeconds());

    setTimeout(() => {
      ++timer;
      console.log('-----> ', timer);
      if (timer === 10) clearInterval(id);
    }, 1000);
  }, 1000);

  // let run = true;
  //
  // setTimeout(() => {
  //   run = false;
  // }, 60000);
  //
  // while(run) {
  //   const data = await getData();
  //
  //   arrOfData.push(data);
  // }
};

// fetchThrottledData();

/**
 * Questions:
 * 1. Can you spot the bug in this implementation?
 * 2. How would you fix the implementation to reach the desired outcome?
 * 3. How would you stop the task from re-occurring after 1 minute of `fetchThrottledData`'s run?
 */
