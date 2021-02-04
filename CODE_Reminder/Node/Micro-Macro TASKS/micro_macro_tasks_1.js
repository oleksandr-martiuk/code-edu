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

setImmediate(() => {
   console.log(`1. setImmediate`);
});
//---------------------------------------------------------------------------------------------------------------
setTimeout(() => {
   console.log(`2-1. setTimeout 0`);
}, 0);
setTimeout(() => {
   console.log(`2-2. setTimeout 1`);
}, 1);
//---------------------------------------------------------------------------------------------------------------
const promise1 = new Promise(resolve => resolve({ num: '3', name: 'new Promise(resolve => {})' }));
promise1
   .then(res => {
      console.log(`${res.num}-1. ${res.name} then`)
      return res;
   })
//---------------------------------------------------------------------------------------------------------------
Promise.resolve({ num: '4', name: 'Promise.resolve()' })
   .then(res => {
      console.log(`${res.num}-1. ${res.name} then`);
      return res;
   });
//---------------------------------------------------------------------------------------------------------------
const promise2 = new Promise(resolve => resolve({ num: '5', name: 'new Promise(resolve => {})' }));
promise2
   .then(res => {
      console.log(`${res.num}-1. ${res.name} then`)
      return res;
   }).then(res => {
      console.log(`${res.num}-2. ${res.name} then`)
      return res;
   }).then(res => {
      console.log(`${res.num}-3. ${res.name} then`)
      return res;
   });
//---------------------------------------------------------------------------------------------------------------
Promise.resolve({ num: '6', name: 'Promise.resolve()' })
   .then(res => {
      console.log(`${res.num}-1. ${res.name} then`);
      return res;
   }).then(res => {
      console.log(`${res.num}-2. ${res.name} then`);
      return res;
   }).then(res => {
      console.log(`${res.num}-3. ${res.name} then`);
      return res;
   });
//---------------------------------------------------------------------------------------------------------------
process.nextTick(() => {
   console.log(`7. nextTick`);
});
//---------------------------------------------------------------------------------------------------------------
console.log(`8. console.log`);

// 8. console.log
// 7. nextTick
// 3-1. new Promise(resolve => {}) then
// 4-1. Promise.resolve() then
// 5-1. new Promise(resolve => {}) then
// 6-1. Promise.resolve() then
// 5-2. new Promise(resolve => {}) then
// 6-2. Promise.resolve() then
// 5-3. new Promise(resolve => {}) then
// 6-3. Promise.resolve() then
// 2-1. setTimeout 0
// 2-2. setTimeout 1
// 1. setImmediate
