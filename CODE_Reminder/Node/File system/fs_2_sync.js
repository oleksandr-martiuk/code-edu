const fs = require('fs');

try {
   let data = fs.readFileSync('./apples.txt', 'utf8');
   // let data = fs.readFileSync('./files/apples.txt', 'utf8');

   const fruitArr = data.split('\n');
   const index = fruitArr.findIndex(str => str.includes('sausages'));

   fruitArr.splice(index, 1);

   const adjData = fruitArr.join('\n');
   console.log(adjData);

   fs.writeFileSync('./files/oranges.txt', adjData);
} catch (e) {
   console.log(e);
}

// Error: ENOENT: no such file or directory, open './apples.txt'
// {
//    errno: -2,
//    syscall: 'open',
//    code: 'ENOENT',
//    path: './apples.txt'
// }
