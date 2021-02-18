const averagePool = arr => {
   let result = 0;

   let f = arr[0];
   let l = arr[arr.length - 1];

   let field = (f === l) ? f : ((f > l) ? l : f);

   for (let i = 1; i < arr.length - 1; i++) {
      result += field - arr[i];
   }

   console.log(result);
}

averagePool([3, 0, 2, 0, 4]);    // 7
averagePool([2, 0, 7]);          // 2
averagePool([5, 0, 2]);          // 2
averagePool([3, 0, 2, 0, 4]);    // 7
