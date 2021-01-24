const buf1 = new Buffer.from('this is the way we build our buffer');
console.log(buf1.length);

const buf2 = buf1.slice(19, buf1.length);
console.log(buf2.toString());

buf2.fill('*', 0,5);
console.log(buf2.toString());

console.log(buf1.toString());

// TODO: check for equality
if (buf1.equals(buf2)) console.log('buffers are equal');
else  console.log(`buffers aren't equal`);

// TODO: copy buffers
var buf1 = new Buffer('this is a new buffer with a string');
// Копирование буфера
var buf2 = new Buffer(10);
buf1.copy(buf2);
console.log(buf2.toString()); // this is a
