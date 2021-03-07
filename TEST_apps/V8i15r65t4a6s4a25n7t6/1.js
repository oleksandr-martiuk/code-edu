const getUpdatedArr = (arr) => {
   let newArr = [];
   let biggest = arr[0];
   let index = 0;
   let done = true;

   for (let i = 1; i < arr.length; i++) {
      if (biggest !== arr[i]) done = false;
      if (biggest < arr[i]) {
         biggest = arr[i]
         index = i;
      }
   }

   if (done) return { arr, done };

   arr.forEach((item, i) => {
      const value = (index !== i) ? arr[i] + 1 : arr[i];
      newArr.push(value);
   })

   return { arr: newArr, done };
}

function countMoves(numbers) {
   // Write your code here

   let i = 0;
   let r = {
      arr: [...numbers],
      done: false
   };

   while (!r.done) {
      r = getUpdatedArr(r.arr, i);
      if (!r.done) i++;
   }

   return i;
}

//----------------------------------------------------------------------------------------------------------------------

countMoves([
   32,
   14,
   27,
   17,
   50,
   94,
   96,
   71,
   60,
   79,
   68,
   64,
   25,
   14,
   76,
   28,
   97,
   12,
   34,
   15,
   98,
   26,
   36,
   43,
   19,
   85,
   19,
   99,
   37,
   68,
   45,
   53,
   26,
   16,
   59,
   49,
   11,
   69,
   20,
   61
]);
