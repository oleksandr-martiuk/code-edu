let buf1 = Buffer.from('This is my pretty example');
let json = JSON.stringify(buf1);

console.log(json);
// {"type":"Buffer","data":[84,104,105,115,32,105,115,32,109,121,32,112,114,101,116,116,121,32,101,120,97,109,112,108,101]}

// recover data
const buf2 = new Buffer.from(JSON.parse(json).data);
console.log(buf2.toString()); // This is my pretty example
console.log(buf2.toString('ascii')); // This is my pretty example
console.log(buf2.toString('utf8', 11, 17)); // pretty
