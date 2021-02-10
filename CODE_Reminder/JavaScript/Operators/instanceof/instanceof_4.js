const simpleStr = 'Это обычная строка';
const myString  = new String();
const newStr    = new String('Строка, созданная с помощью конструктора');
const myDate    = new Date();
const myObj     = {};

console.log('simpleStr instanceof String :', simpleStr instanceof String); // возвращает false, проверяет цепочку прототипов
console.log('myString  instanceof String :', myString  instanceof String); // возвращает true
console.log('newStr    instanceof String :', newStr    instanceof String); // возвращает true
console.log('myString  instanceof Object :', myString  instanceof Object); // возвращает true

console.log('myObj instanceof Object :',     myObj instanceof Object);     // возвращает true, несмотря на прототип, равный undefined
console.log('({})  instanceof Object :',     ({})  instanceof Object);     // возвращает true, аналогично предыдущей строчке

console.log('myString instanceof Date :',    myString instanceof Date);    // возвращает false

console.log('myDate instanceof Date :',      myDate instanceof Date);      // возвращает true
console.log('myDate instanceof Object :',    myDate instanceof Object);    // возвращает true
console.log('myDate instanceof String :',    myDate instanceof String);    // возвращает false
