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

for (let i in ['', '']) {
   setTimeout(() => {
      console.log(`${i}. Timeout`);
      Promise.resolve().then(() => {
         console.log(`${i}. Promise-1 `);
      }).then(() => {
         console.log(`${i}. Promise-2 `);
      });
   })
}

// 0. Timeout
// 0. Promise 1
// 0. Promise 2
// 1. Timeout
// 1. Promise 1
// 1. Promise 2
