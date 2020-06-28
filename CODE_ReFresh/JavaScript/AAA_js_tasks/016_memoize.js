'use strict';

const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');

const memoize = fn => {
   const cache = Object.create(null);
   return (...args) => {
      const key = generateKey(args);
      const val = cache[key];
      if (val) return val;
      const res = fn(...args);
      cache[key] = res;
      return res;
   }
}

//--------------------------------------------------------------

const getPerson = (fName, sName, age) => {
   let i = 0;
   while(i < 2000000000) i++;
   return `${fName} ${sName} (${age})`;
}

const getMemoPerson = memoize(getPerson);

console.time('Sidorov');
const res_1 = getMemoPerson('Igor', 'Sidorov', 43);
console.timeEnd('Sidorov');
console.log(res_1);

console.log('-------------------------------------------');

console.time('Chichikova');
const res_2 = getMemoPerson('Olga', 'Chichikova', 25);
console.timeEnd('Chichikova');
console.log(res_2);

console.log('-------------------------------------------');

console.time('Bogarev');
const res_3 = getMemoPerson('Vlad', 'Bogarev', 68);
console.timeEnd('Bogarev');
console.log(res_3);

console.log('-------------------------------------------');

console.time('> Sidorov');
const res_4 = getMemoPerson('Igor', 'Sidorov', 43);
console.timeEnd('> Sidorov');
console.log(res_4);

console.log('-------------------------------------------');

console.time('Sivuhina');
const res_5 = getMemoPerson('Tamara', 'Sivuhina', 12);
console.timeEnd('Sivuhina');
console.log(res_5);
