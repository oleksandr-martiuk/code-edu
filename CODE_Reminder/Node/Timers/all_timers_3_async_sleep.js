function sleep(ms) {
   return new Promise(resolve =>
      setTimeout(() => resolve('done'), ms)
   );
}

console.log('-----Main: START-----');

(async () => {
   console.log('Start sleep: ', new Date().toISOString());
   console.log('Sleep about 3 sec.');
   const result = await sleep(3000);
   console.log('After sleep: ', new Date().toISOString(), result);
})();

console.log('-----Main: FINISH-----');
