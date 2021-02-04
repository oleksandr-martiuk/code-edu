/**
 |------------------------------------------|
 | (script: sync function) ---> console.log |
 |------------------------------------------|
 | MICRO TASKS:                             |
 |   > nextTick                             |
 |   > Promises: then_1, then_2...          |
 |------------------------------------------|
 | MACRO TASKS:                             |
 |   > setTimeout()                         |
 |   > setImmediate()                       |
 |   > fs.open()                            |
 |------------------------------------------|
 **/

let chain = Promise.resolve(null)

for (let i = 0; i < 2; i++) {
   console.log(`Chaining (${i})`);
   chain = chain.then(res => {
      return Promise.resolve()
         .then(() => {
            setTimeout(() => {
               console.log(`Timeout (${i})`);
               Promise.resolve()
                  .then(() => {
                     console.log(`Promise 1 (${i})`);
                  })
                  .then(() => {
                     console.log(`Promise 2 (${i})`);
                  })
            }, 0)
         })
      }
   );
}

chain.then(() => console.log('done'));

// Chaining 0
// Chaining 1
// done
// Timeout (0)
// Promise 1 (0)
// Promise 2 (0)
// Timeout (1)
// Promise 1 (1)
// Promise 2 (1)
