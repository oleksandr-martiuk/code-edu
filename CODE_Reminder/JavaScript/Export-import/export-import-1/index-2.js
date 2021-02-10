// 1. Added { "type": "module" } into package.json to make 'import' works
// 2. change extension of file utils to 'mjs'

import('./utils.mjs').then(module => {
   module.default(); // → logs 'Hi from the default export!'
   module.doStuff(); // → logs 'Doing stuff…'
});
