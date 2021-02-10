// 1. Added { "type": "module" } into package.json to make 'import' works
// 2. change extension of file utils to 'mjs'

(async () => {
   const moduleSpecifier = './utils.mjs';
   const module = await import(moduleSpecifier)

   console.log(Object.keys(module)); // [ 'default', 'doStuff' ]

   module.default();
   // → logs 'Hi from the default export!'

   module.doStuff();
   // → logs 'Doing stuff…'
})();
