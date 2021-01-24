const arr = [1, 55, 77, 99, 234, 2];

Array.prototype.myMap = function(cb) {
   const result = [];
   for (let item of this) {
      const newItem = cb(item);
      result.push(newItem);
   }
   return result;
}

const newArr_1 = arr.myMap(item => item + 1);
console.log(newArr_1);

//----------------------------------------------------------------------------------------------------------------------
// Native method:
const newArr_2 = arr.map(item => item + 1);
console.log(newArr_2);
