const data = require('../../db/mock.json')

class Tours {
   constructor() {
      this.data = data.tours;
   }

   async getTours(search){
      return new Promise(resolve => {
         setTimeout(() => {
            const result = search ? this.data.filter(item => item?.title?.toLowerCase().includes(search)) : this.data;
            return resolve(result);
         }, 1500);
      });
   }
}

module.exports = Tours;
