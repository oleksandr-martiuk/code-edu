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

console.log('1. console.log 1');

setTimeout(function () {
   console.log('2. setTimeout 0');
}, 0);

Promise.resolve()
.then(function () {
   console.log('3. Promise.resolve() ---> then 1');
})
.then(function () {
   console.log('4. Promise.resolve() ---> then 2');
});

console.log('5. console.log 2');

// 1. console.log 1
// 5. console.log 2
// 3. Promise.resolve() ---> then 1
// 4. Promise.resolve() ---> then 2
// 2. setTimeout 0
