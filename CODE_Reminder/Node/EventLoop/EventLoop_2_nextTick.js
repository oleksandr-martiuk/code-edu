let bar;

function someAsyncApiCall(callback) {
   process.nextTick(callback); // will be called on the next iteration ---> 'bar 1'
   callback(); // call immediately ---> 'bar undefined'
}

someAsyncApiCall(() => {
   console.log('bar', bar);
});

bar = 1;
