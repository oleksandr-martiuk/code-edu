const simplePool = (arr) => {
   let first = arr[0];
   let last = arr[arr.length - 1];

   const result = (first === last)
      ? first
      : ((first > last) ? last : first);

   console.log(result);
}

simplePool([2, 0, 2]);  // 2
simplePool([2, 0, 7]);  // 2
simplePool([5, 0, 2]);  // 2
