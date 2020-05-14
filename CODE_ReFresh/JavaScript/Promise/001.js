const delayP = new Promise(resolve => {
    console.log('delay - start');
    setTimeout(() => {
        resolve(5);
        console.log('delay - finish');
    }, 2000);
})

const promise = new Promise(resolve => {
    console.log('promise - start');
    const result = delayP.then(result => result);
    resolve(result);
    console.log('promise - finish');
});

promise
    .then(result => console.log('Done: ', result))
    .catch(err => console.log('---- ERROR ----: '));
