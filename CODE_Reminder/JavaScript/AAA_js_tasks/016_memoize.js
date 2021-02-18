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

const addPerson = (firstName, lastName, years) => {
   console.time(lastName);
   const result = getMemoPerson(firstName, lastName, years);
   console.timeEnd(lastName);
   console.log(result);
   console.log('-------------------');
}

//--------------------------------------------------------------

const getPerson = (fName, sName, age) => {
   let i = 0;
   while(i < 1000000001) {
      if (i % 500000000 === 0) console.log(i);
      i++;
   }
   return `${fName} ${sName} (${age})`;
}

const getMemoPerson = memoize(getPerson);

//----------------------------------------------------------------------------------------------------------------------

addPerson('Igor', 'Suvorov', 43);
addPerson('Olga', 'Chichis', 25);
addPerson('Vlad', 'Bogart', 68);
addPerson('Igor', 'Suvorov', 43);
addPerson('Tamara', 'Silvina', 12);
