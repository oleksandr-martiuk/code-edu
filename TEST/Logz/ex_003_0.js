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

/**
 * Answers:
 * 1. Sometimes there is not just one active request because setInterval sends request each second and getData method sometimes has delay more that a second
 * 2. added implementation of function `setAsyncInterval` below
 * 3. 'setInterval' I stop with 'clearInterval' & recursion method 'runServer' stop just by using 'if' statement and keyword 'return'
 */

const arrOfData = [];

const getData = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(Math.random() * 5), Math.random() * 2000)
  );

const setAsyncInterval = async () => {
  const run = async () => {
    const data = await getData();
    arrOfData.push(data);
  
    console.log(data);
    setTimeout(run, 1000);
  }
  await run();
}

let time = 0;
let timer=5;

const interval = setInterval(()=> {
  if (!time) {
    console.log('START');
    setAsyncInterval(5);
  }
  time++;
  if (time === timer) {
    clearInterval(interval);
    console.log('----------------------');
    return;
  }
  console.log(time, '===', timer);
}, 1000) 
