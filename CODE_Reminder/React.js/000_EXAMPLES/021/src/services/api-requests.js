import db from '../../../000_data/db_2.json';

const getMockData = (entity) => {
   return new Promise(resolve => {
      setTimeout(() => {
         const result = db[entity];
         return resolve(result);
      }, 1500);
   })
}

const get = entity => getMockData(entity)

export {
   get,
}
