const arr = [[1, 2], [3, [4, 5]]];

function flatArr(arg) {
   let result = [];
   for(let a of arg) {
      if (Array.isArray(a)) result = [...result, ...flatArr(a)];
      else result.push(a);
   }
   return result;
}

const result = flatArr(arr);

console.log(result);
