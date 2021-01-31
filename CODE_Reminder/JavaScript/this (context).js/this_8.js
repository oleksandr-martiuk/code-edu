{
   var a = 3; // !bad practice
   let b = 77;
   const c = 158;
   console.log(a); // 3
   console.log(b); // 77
   console.log(c); // 158
}

console.log('-----')

console.log(a); // 31
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
