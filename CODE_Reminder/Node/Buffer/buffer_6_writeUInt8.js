const buf = new Buffer.alloc(4);

// Запись значений в буфер
buf.writeUInt8(0x63,0);
buf.writeUInt8(0x61,1);
buf.writeUInt8(0x74,2);
buf.writeUInt8(0x73,3);

// Вывод буфера в строковом виде
console.log(buf.toString()); // cats
console.log(buf.readUInt8()); // 99
console.log(buf.readUIntLE(0, 4)); // 1937006947
