const asyncOperation = function(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`----- ${time} -----`);
            return resolve(time)
        }, time);
    });
}

const promiseAll = promises => {
    const results = [];
    let completed = 0;

    return new Promise( (resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then(value => {
                results[index] = value;
                ++completed;
                if(completed === promises.length) return resolve(results);
            }).catch(error => reject(error));
        });
    });
}

//-------------------------------------------------------------------------------------------------------

const promisesToMake = [
    asyncOperation(2000),
    asyncOperation(1000),
    asyncOperation(3000)
];

const promises = promiseAll(promisesToMake);
promises.then((results) => console.log('Final RESULTS: ', results));
