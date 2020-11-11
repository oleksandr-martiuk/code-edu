const delayP = new Promise(resolve => {
    console.log('[D] delay: start of function');
    setTimeout(() => {
        resolve(5);
        console.log('[D] delay: finish');
    }, 2000);
    console.log('[D] delay: end of function');
})

const promise = new Promise(resolve => {
    console.log('[-P-] promise: start of function');
    const result = delayP
        .then(result => {
            console.log(`[-P-] promise: result: ${result}`);
            return result;
        });
    resolve(result);
    console.log('[-P-] promise: end of function');
});

console.log('--------------------------------------------');

promise
    .then(result => {
        console.log('[...] then:--> Done: ', result)
    })
    .catch(err => {
        console.log('[...] ---- ERROR ----: ')
    });
