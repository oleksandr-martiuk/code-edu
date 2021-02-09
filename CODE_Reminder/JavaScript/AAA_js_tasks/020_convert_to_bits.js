const dec2bin = dec => {
   return (dec >>> 0).toString(2);
}

console.log(dec2bin(1));      // 1
console.log(dec2bin(-1));     // 11111111111111111111111111111111
console.log(dec2bin(256));    // 100000000
console.log(dec2bin(-256));   // 11111111111111111111111100000000
