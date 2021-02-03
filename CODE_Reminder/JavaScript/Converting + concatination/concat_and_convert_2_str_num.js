const num1 = 42;
const num2 = '42';

if (num1 === num2) console.log(true);
else console.log(false);

// Will log `false`

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const text1 = '42px';
const integer = parseInt(text1, 10); // 42
console.log(integer);

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const text2 = '3.14someRandomStuff';
const pointNum = parseFloat(text2); // 3.14
console.log(pointNum);

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

Number('123');                   // 123
Number('12.3');                  // 12.3
Number('3.14someRandomStuff');   // NaN
Number('42px');                  // NaN
