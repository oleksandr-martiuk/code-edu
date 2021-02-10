const man = {
   name: 'Bonny',
   address: {
      city: 'Washington',
      street: '10th Avenue',
      building: 99,
   }
}

const { name: manName, address, ...bodyRest } = man;

console.log(manName);
console.log(address);
console.log(bodyRest); // {}
console.log('\n');

address.city = 'New York'; // (!) change city by link 'address' in the 'man'
console.log(man);
