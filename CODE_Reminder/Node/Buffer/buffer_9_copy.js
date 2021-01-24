const buf1 = new Buffer.from('this is some example of new Buffer');
console.log(buf1.toString());

const buf2 = new Buffer.alloc(10);
buf1.copy(buf2);
console.log(buf2.toString()); // this is so
