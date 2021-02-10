const adventurer = {
   name: 'Alice',
   cat: {
      name: 'Dinah',
      age: 7,
   }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

console.log(adventurer.cat.getName?.());
// expected output: undefined
