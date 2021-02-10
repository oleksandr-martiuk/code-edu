const person = {
   name: 'Joe',
   surName: 'Black',
   city: 'New York',
   age: 34
}

let { name: fName, surName: sName, ...personCopy } = person;

console.log(fName);
console.log(sName);
console.log(personCopy);
console.log('\n');

fName = 'Jim';
personCopy.city = 'Washington';

console.log('personCopy: ', personCopy);
console.log('person.city: ', person);
