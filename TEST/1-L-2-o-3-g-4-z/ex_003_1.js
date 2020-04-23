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

/**
 * Answers:
 * 1. Sometimes there is not just one active request because setInterval sends request each second and getData method sometimes has delay more that a second
 * 2. added implementation of function `setAsyncInterval` below
 * 3.
 */

class TechTask {
  constructor(stopTime = 60){
    this.dataAccess = true;
    this.arrOfData = [];
    this.timer = 0;
    this.stop = stopTime;
  }

  getData = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        this.dataAccess = !this.dataAccess;
        resolve(Math.random() * 5);
      }, Math.random() * 2000)
    );

  setAsyncInterval = () => {
    const interval = setInterval(async () => {
      this.timer++;

      console.log('timer: ', this.timer, '  ||  access: ', this.dataAccess);

      if (this.timer === this.stop) {
        clearInterval(interval);
        return;
      }

      if (this.dataAccess) {
        this.dataAccess = !this.dataAccess;

        setTimeout(async () => {
          const data = await this.getData();
          this.arrOfData.push(data);
          console.log('Data length = ', this.arrOfData.length);
        }, 1000);
      }

    }, 1000);
  }
}

const taskInstance = new TechTask(10);
taskInstance.setAsyncInterval();
