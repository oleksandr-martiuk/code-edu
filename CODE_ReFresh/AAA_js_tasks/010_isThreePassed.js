const isThreePassed = (...args) => {
    const lastIndx = args.length - 1;

    const el = args[lastIndx];
    const currArr = args.splice(0, lastIndx);
    console.log(args);

    return currArr.indexOf(el) !== -1;
}

const res_1 = isThreePassed('a', 'b', 100, true, 2);
console.log('result #1: ', res_1);

const res_2 = isThreePassed('a', 'b', 100, true, 'b');
console.log('result #2: ', res_2);
