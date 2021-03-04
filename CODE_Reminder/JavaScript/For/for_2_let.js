// console.log('OUT: ', a); // ReferenceError: a is not defined

for (let a = 0; a < 3; a++) {
   console.log('IN: ', a);
}

// console.log('OUT: ', a); // ReferenceError: a is not defined

// IN:   0
// IN:   1
// IN:   2

//----------------------------------------------------------------------------------------------------------------------

let a = 101;
console.log('OUT: ', a);

for (let a = 0; a < 3; a++) {
   console.log('IN: ', a);
}

console.log('OUT: ', a);

// OUT:  101
// IN:   0
// IN:   1
// IN:   2
// OUT:  101
