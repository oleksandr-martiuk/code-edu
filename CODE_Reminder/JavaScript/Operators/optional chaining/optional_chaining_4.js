const obj = {
   a: {
      'name-b': 77,
      'name-c': 'Hello'
   }
}

console.log(obj.c?.['name' + '-' + 'm']); // undefined
