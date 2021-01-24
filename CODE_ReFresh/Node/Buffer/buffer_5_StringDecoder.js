let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf8');

let euro = Buffer.from([0xE2, 0x82]);
let euro2 = Buffer.from([0xAC]);

console.log(decoder.write(euro)); // space
console.log(decoder.write(euro2)); // €

console.log(euro.toString()); // � (strange sign)
console.log(euro2.toString()); // � (strange sign)

//----------------------------------------------------------

let buf = new Buffer.alloc(3);
buf.write('€','utf-8');
console.log(buf);
console.log(buf.length); // 3 --> Buffer length not equal to length of characters
console.log(buf.toString()); // €
