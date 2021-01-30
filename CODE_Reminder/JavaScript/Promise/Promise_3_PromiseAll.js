function PromiseAll (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            reject(new Error('arguments must be provided as an Array'));
        }

        const resultAcc = {};
        let counter = 0;

        for (const [i, promise] of promises.entries()) {
            promise
                .then(result => {
                    resultAcc[i] = result;
                    counter++;
                    if (counter >= promises.length) {
                        const response = Object.values(resultAcc);
                        return resolve(response);
                    }
                })
                .catch(err => reject(err));
        }
    })
}

// ---------------------------------------------------------------------------------------------------------------------

const promise_1 = new Promise(resolve => setTimeout(() => resolve(555), 5000));
const promise_2 = new Promise(resolve => setTimeout(() => resolve('Bill'), 3000));
const promise_3 = new Promise(resolve => setTimeout(() => resolve('Anna'), 2000));
const promise_4 = new Promise(resolve => setTimeout(() => resolve(true), 1000));
const promise_5 = new Promise(resolve => setTimeout(() => resolve(['some array']), 500));
const promise_6 = new Promise(() => {throw new Error("o_O")});

const firstPackage =  [promise_1, promise_2, promise_3, promise_4, promise_5];
const secondPackage = [promise_1, promise_2, promise_3, promise_4, promise_5, promise_6];

console.log('before');

PromiseAll(promise_1)
    .then(result => console.log(result))
    .catch(err => console.log('ERROR: ', err.message));

PromiseAll(firstPackage)
    .then(pResults => console.log('Promise #1: ', pResults))

PromiseAll(secondPackage)
    .then(pResults => console.log('Promise #2: ', pResults))
    .catch(err => console.log('Promise #2: ', 'We got an Error: ', err.message));

console.log('after');
console.log('-------------------------------------------------');
