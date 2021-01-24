const arr1 = [1, 2, 3];
const buf1 = Buffer.from(arr1);
console.log(buf1);

//---------------------------------------------

const arr2 = new Uint8Array([1, 2, 3]);
const buf2 = Buffer.from(arr2);
console.log(buf2);

//---------------------------------------------

const buf3 = Buffer.alloc(10);
console.log(buf3);

//---------------------------------------------

const buf4 = Buffer.allocUnsafe(10);
console.log(buf4);
