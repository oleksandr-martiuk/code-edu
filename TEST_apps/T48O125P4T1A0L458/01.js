function calculate(T, R) {
   const acc = {};

   for (let index in T) {
      const item = T[index];

      const r = item.split(/(\d+)/)
      const name = r[1];

      acc[name] = (name in acc)
         ? acc[name] && (R[index] === 'Okay')
         : (R[index] === 'Okay');
   }

   const groupCount = Object.keys(acc).length;
   const trueCount = Object.keys(acc).reduce((result, key) => acc[key] ? ++result : result, 0)

   return Math.round((100 / groupCount) * trueCount);
}

console.log(calculate(
   ['some1a', 'some2', 'some1b', 'some1c', 'some3'],
   ['Wrong', 'Okay', 'Error', 'Okay', 'Expired']
)); // 33
console.log(calculate(
   ['example1', 'example3', 'example2', 'example4b', 'example4a'],
   [ 'Wrong', 'Okay', 'Okay', 'Expired', 'Okay']
)); // 50
