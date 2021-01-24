let buf = new Buffer.alloc(10);
console.log(buf);
buf.fill(35, 2, 6);
console.log(buf);

const str = 'New String';
let bufStr = new Buffer.alloc(15, str);
console.log(bufStr);
