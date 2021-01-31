const fs = require('fs');
const fsPromise = require('fs/promises');

fs.readFile('/file.json', {}, (err, data) => {
   if (err !== null) {
      // error handling
      console.log(err)
      return
   }
   // Error does not exist, handling data
   console.log(data)
})
