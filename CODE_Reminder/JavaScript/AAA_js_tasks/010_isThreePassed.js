const isThreePassed = (...args) => {
    const lastIndex = args.length - 1;

    const el = args[lastIndex];
    const currArr = args.splice(0, lastIndex);
    console.log(args);

    return currArr.indexOf(el) !== -1;
}

const res_1 = isThreePassed('a', 'b', 100, true, 2);
console.log('result #1: ', res_1);

const res_2 = isThreePassed('a', 'b', 100, true, 'b');
console.log('result #2: ', res_2);
