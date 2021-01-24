const buf1 = new Buffer.from('1 is number one');
const buf2 = new Buffer.from('2 is number two');
const buf3 = new Buffer.alloc(buf1.length);

buf1.copy(buf3);

// Если сравниваемый буфер предшествует второму, то возвращается значение –1
// если нет — значение 1
// Если два буфера содержат одинаковые байты, то возвращается 0

console.log(buf1.compare(buf2)); // -1
console.log(buf2.compare(buf1)); // 1
console.log(buf1.compare(buf3)); // 0
