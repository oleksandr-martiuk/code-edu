export const getName = () => {
   return new Promise(resolve => {
      setTimeout(() => {
         return resolve({ name: 'Tom' });
      }, 1500);
   })
}
