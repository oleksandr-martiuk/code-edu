function doIt (cb) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, Math.round(Math.random() * 3000));
    });
}

const p1 = doIt(() => console.log('1'));
const p2 = doIt(() => console.log('2'));
const p3 = doIt(() => console.log('3'));
const p4 = doIt(() => console.log('4'));
const p5 = doIt(() => console.log('5'));

new Promise(resolve => {
    // 1-st variant
    // const result = Promise.all([p1, p2, p3, p4, p5])
    // resolve(result);

    // 2-nd variant
    resolve(Promise.all([p1, p2, p3, p4, p5]));
}).then(result => console.log('DONE'));
