const arr = ["b", "c", "Hello", "Alex", 4444, "Toyota"];

Array.prototype.cutLast = function(n){
   return this.splice(this.length-n, n);
}

const cutResult = arr.cutLast(2);

console.log(arr);
console.log(cutResult);

console.log(arr instanceof Array); // true
