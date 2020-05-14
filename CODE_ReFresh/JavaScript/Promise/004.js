function doit (cb) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, Math.round(Math.random() * 10000));
    });
}

const p1 = doit(() => console.log('1'));
const p2 = doit(() => console.log('2'));
const p3 = doit(() => console.log('3'));
const p4 = doit(() => console.log('4'));
const p5 = doit(() => console.log('5'));

new Promise(resolve => {
    // 1-st variant
    // const result = Promise.all([p1, p2, p3, p4, p5])
    // resolve(result);

    // 2-nd variant
    resolve(Promise.all([p1, p2, p3, p4, p5]));
}).then(result => console.log('DONE'));
