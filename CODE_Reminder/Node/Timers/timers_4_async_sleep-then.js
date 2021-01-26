const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

console.log('-----Main: START-----');

console.log('Start sleep: ', new Date().toISOString());
console.log('Sleep about 3 sec.');

sleep(3000)
   .then(() => console.log('After sleep: ', new Date().toISOString()));

console.log('-----Main: FINISH-----');
