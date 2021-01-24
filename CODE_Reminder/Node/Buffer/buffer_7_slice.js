let buf = new Buffer.alloc(12);

buf[0] = 0x48;
buf[1] = 0x65;
buf[2] = 0x6c;
buf[3] = 0x6c;
buf[4] = 0x6f;
buf[5] = 0x20; // space
buf[6] = 0x66;
buf[7] = 0x72;
buf[8] = 0x69;
buf[9] = 0x65;
buf[10] = 0x6e;
buf[11] = 0x64;

console.log(buf.toString());

const bufPeace = buf.slice(4, 10)
console.log(bufPeace.toString());
