async function asyncToDo(num) {
   console.log(`${num}. toDo`);
}

(async (f) => {
   console.log('---start---');
   const firstToDo = await f(1);

   const secondToDo = await f(2).then(r1 => {
      return `${r1} [2.1]`;
   }).then(r2 => {
      console.log(r2, ` [2.2]`)
   });

   const thirdToDo = f(3);

   thirdToDo.then(r => {
      console.log(`${r} [3]`);
   })
   console.log('-------------------------');
})(asyncToDo);
console.log('=========================');
