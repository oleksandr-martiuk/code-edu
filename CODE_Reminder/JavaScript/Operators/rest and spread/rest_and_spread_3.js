// Rest properties for object destructuring assignment:
const person = {
   firstName: 'Sebastian',
   lastName: 'Marge',
   country: 'USA',
   state: 'CA',
};

const { firstName, lastName, ...rest } = person;
console.log(firstName);    // Sebastian
console.log(lastName);     // Marge
console.log(rest);         // { country: 'USA', state: 'CA' }

// Spread properties for object literals:
const personCopy = { firstName, lastName, ...rest };

console.log(personCopy);   // { firstName: 'Sebastian', lastName: 'Marge', country: 'USA', state: 'CA' }
