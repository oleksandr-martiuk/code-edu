const people = [
   {
      name: 'Bill',
      age: 33,
      sex: 'm',
      address: {
         city: 'Washington',
         street: '10th Street NW 20010'
      }
   },
   {
      name: 'Anatoliy',
      age: 12,
      sex: 'm',
   },
   {
      name: 'Yuko',
      age: 24,
      sex: 'w',
      address: {
         city: 'Tokyo',
         street: 'Kenji Juanjo'
      }
   },
   {
      name: 'Tonya',
      age: 41,
      sex: 'w',
      address: {
         city: 'Rome',
         street: 'Via Margita'
      }
   },
];

people.forEach(person => {
   // console.log(person.address.street); // TypeError: Cannot read property 'street' of undefined
   console.log(person.address?.street)
})

// 10th Street NW 20010
// undefined
// Kenji Juanjo
// Via Margita
