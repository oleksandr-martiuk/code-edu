/**
 * This is a code that will iterate over a task bringing data from a remote server.
 * It should pause 1 second between each call (start of execution).
 * You can only have one active request each time.
 * Naively it would be implemented like that.
 *
 * Please answer the questions below.
 */

// const arrOfData = [];
// const getData = () =>
//   new Promise(resolve =>
//     setTimeout(() => resolve(Math.random() * 5), Math.random() * 2000)
//   );
//
// setInterval(async () => {
//   const data = await getData();
//   arrOfData.push(data);
// }, 1000);

/**
 * Questions:
 * 1. What’s the issue with that implementation?
 * 2. How would you implement the desired outcome?
      Create `setAsyncInterval` function that will do that.
 * 3. How would you stop the task from occurring after 1 minute?
 */

const arrOfData = [];

const getData = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(Math.random() * 5), Math.random() * 2000)
  );

const setAsyncInterval = (stopTime = 60) => {
  let timer = 0;

  const runServer = async () => {
    if (timer >= stopTime) {
      return;
    }

    const data = await getData();
    arrOfData.push(data);

    setTimeout(runServer, 1000);
  }

  runServer();

  const interval = setInterval(() => {
    timer++;
    if (timer >= stopTime) {
      clearInterval(interval);
      return;
    }
  }, 1000);
}

setAsyncInterval();
