const run = fCall => {
   console.log(fCall);
}
const asyncRun = async () => {
   console.log('call of "asyncRun"');
   return 'promise';
}
const asyncRun2 = counter => {
   console.log('call of "asyncRun2"');
   return new Promise((resolve, reject) => {
      let i = 0;
      while (counter > i) {
         i++;
         console.log(i);
         if (i === 5) return reject('FUCK');
      }
      console.log('...done...')
      return resolve(counter);
   })
}

//--------------------------------------------------

setImmediate(run, '1. setImmediate');
setTimeout(run, 0, '2. setTimeout');
asyncRun().then(result => console.log(`3. ${result}`));
asyncRun2(10).then(result => console.log(result)).catch(err => console.log(err));
asyncRun2(3).then(result => console.log(result)).catch(err => console.log(err));
process.nextTick(run, '4. nextTick');
run('5. run-1');
run('6. run-2');
console.log('------------END-of-1st-iteration------------');
