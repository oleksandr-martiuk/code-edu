const { callbackify } = require('util');

async function main() {
   const num = Math.floor(Math.random() * 10);
   if (num > 5) {
      return Promise.resolve('Hello world');
   } else {
      return Promise.reject('Something wrong');
   }
}

callbackify(main)(function(err, result) {
   try {
      if (err) throw err;
      console.log(result);
   } catch(e) {
      console.log('ERROR: ', e);
   }
});
