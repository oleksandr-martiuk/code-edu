const john = {
   name: 'John',
   address: {
      city: 'Washington',
      street: '10th Avenue',
      building: 99,
   }
}

//---------------------------------------------------------------------

const newJohn_1 = { ...john };

newJohn_1.name = 'Tim';
newJohn_1.address.city = 'New York';

console.log('john: ', john); // john.address.city changes by link
console.log('\n');

//---------------------------------------------------------------------

const newJohn_2 = Object.assign({}, john);

newJohn_2.name = 'Sam';
newJohn_2.address.city = 'Chicago';

console.log('john: ', john); // john.address.city changes by link
console.log('\n');
