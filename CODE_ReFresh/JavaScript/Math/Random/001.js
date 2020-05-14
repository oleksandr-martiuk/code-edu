const rNum_1 = Math.random();
console.log('rNum_1: ', rNum_1);

// [0 to 10]
const rNum_2 = Math.floor(Math.random() * 10);
console.log('rNum_2: ', rNum_2);

// form 10 to 20
const rNum_3 = Math.floor(Math.random() *10) + 10;
console.log('rNum_3: ', rNum_3);

console.log('------------------------------------');

for (let i = 0; i < 100; i++) {
    const rNum = Math.floor(Math.random() * 10);

    if ([0, 9, 10].includes(rNum))  // 10 does not exist
        console.log(rNum)
}
