function PromiseAll (args) {
    return new Promise((resolve, reject) => {
        const finalResult = {};

        for (let i in args) {
            args[i].then(result => {
                finalResult[i] = result;
                if (Object.keys(finalResult).length === args.length) {
                    const pResuls = Object.values(finalResult);
                    resolve(pResuls)
                }
            }).catch(err => {
                reject(err);
            });
        }
    })
}

// --------------------------------------------------------------------------------------
const promise_1 = new Promise(resolve => setTimeout(() => resolve(555), 5000));
const promise_2 = new Promise(resolve => setTimeout(() => resolve('Bill'), 3000));
const promise_3 = new Promise(resolve => setTimeout(() => resolve('Anna'), 2000));
const promise_4 = new Promise(resolve => setTimeout(() => resolve(true), 1000));
const promise_5 = new Promise(resolve => setTimeout(() => resolve(['some array']), 500));
const promise_6 = new Promise(() => {throw new Error("o_O")});

const firstPackage = [promise_1, promise_2, promise_3, promise_4, promise_5];
const secondPackage = [promise_1, promise_2, promise_3, promise_4, promise_5, promise_6];

console.log('before');

// PromiseAll(firstPackage)
//     .then(pResults => console.log(pResults))

PromiseAll(secondPackage)
    .then(pResults => console.log(pResults))
    .catch(err => console.log('We got an Error: ', err.message));

console.log('after');
console.log('-------------------------------------------------');
