// Sequential calls and sequential execution of 4 pseudo-asynchronous functions

const getTimeout = () => Math.floor(Math.random() * 6) * 1000;
const checkError = timeout => {
   try {
      if (timeout >= 5000 || timeout <= 0) throw new Error(`Something wrong`);
   } catch(e) {
      console.log('ERROR: ', e.message);
      return true;
   }
}

const readConfig = (err = null, appName) => {
   // if (err) return;
   // else console.log('---done---');

   const timeout = getTimeout();

   setTimeout(() => {
      console.log(timeout, `(1) configs for ${appName} are loading...`);
      // ...getting response
      if (checkError(timeout)) err = true;
      doQuery(err, 'SELECT * FROM ...');
   }, timeout);
};

const doQuery = (err = null, statement) => {
   if (err) return;
   else console.log('---done---');

   const timeout = getTimeout();

   setTimeout(() => {
      console.log(timeout, '(2) SQL query is executing: ', statement);
      // ...getting response
      if (checkError(timeout)) err = true;
      httGet(err, 'http://www.myapp.qwerty/articles/the-best?1235985');
   }, timeout);
};

const httGet = (err = null, url) => {
   if (err) return;
   else console.log('---done---');

   const timeout = getTimeout();

   setTimeout(() => {
      console.log(timeout, '(3) Page is retrieving from the url: ', url);
      // ...getting response
      if (checkError(timeout)) err = true;
      readFile(err, './article/file-1235985.txt');
   }, timeout);
};

const readFile = (err = null, fileName) => {
   if (err) return;
   else console.log('---done---');

   const timeout = getTimeout();

   setTimeout(() => {
      console.log(timeout, `(4) "${fileName}" is loading...`);
      // ...getting response
      if (checkError(timeout)) err = true;
      done(err);
   }, timeout);
};

const done = (err) => {
   if (err) return;
   else console.log('---done---');

   console.log('All DONE!');
}

//----------------------------------------------------------------------------------------------------------------------

console.log('start');
readConfig(null, 'MyApp');
console.log('finish');
