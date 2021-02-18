// take any number of promises for arguments
function promiseAll(promises) {
    console.log('================= START PromiseALL =================');

    return new Promise((resolve, reject) => {
        const results = [];
        let complete = 0;

        promises.forEach((promise, index) => {
            promise
                .then(result => {
                    results[index] = result;
                    ++complete;
                    console.log(`> ${result}`);
                    if (complete === results.length) {
                        console.log('>>> results: ', results);
                        return resolve(results);
                    }
                })
                .catch(err => reject(err));
        });
    });
}

const promise1 = new Promise(resolve => {
    setTimeout(() => resolve('first'), 2000)
});
const promise2 = new Promise(resolve => resolve("second"));

(async () => {
    await promiseAll([promise1, promise2]).then(r => console.log('Final result: ', r));
    console.log('------FIN------');
})();
