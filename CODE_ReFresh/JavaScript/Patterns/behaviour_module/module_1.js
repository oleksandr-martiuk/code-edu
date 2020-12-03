const counterIncrementer = (() => {
   let counter = 0;

   return () => {
      return ++counter;
   };
})();

// prints out 1
console.log(counterIncrementer());
// prints out 2
console.log(counterIncrementer());
// prints out 3
console.log(counterIncrementer());
