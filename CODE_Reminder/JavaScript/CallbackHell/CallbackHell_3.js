// Back to order
// Use global data and decentralized control flow (bad practices)

const data = {};

// Emulate asynchronous calls

const wrapAsync = fn => (...args) => setTimeout(
   fn, Math.floor(Math.random() * 3000), args
)

// Asynchronous functions

const done = () => console.log('All done!');

const readFile = wrapAsync(() => {
   console.log('(4) Readme file loaded');
   data.readme = 'file content';
   console.dir(data);
   done();
});

const getHttPage = wrapAsync(() => {
   console.log('(3) Page retrieved');
   data.html = '<html>Some archaic were here</html>'
   readFile();
});

const selectFromDB = wrapAsync(() => {
   console.log('(2) SQL query executed');
   data.cities = [{ name: 'New York' }, { name: 'Rome' }];
   getHttPage();
});

const readConfig = wrapAsync(() => {
   console.log('(1) config loaded');
   data.config = { name: 'name' };
   selectFromDB();
});

//----------------------------------------------------------------------------------------------------------------------

readConfig();
