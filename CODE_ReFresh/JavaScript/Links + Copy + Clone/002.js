function getUpdatedState (arg, num) {
    arg.b = num;
    return arg;
}

function getPureState (arg, num) {
    return {...arg, b: num}
}

// -----------------------------------------------|
// -----------------------------------------------|

const fObj = {
    a: 1,
    b: 11
}

console.log('1. fObj: ', fObj);
console.log('-----------------------------------');

const newObj = getUpdatedState(fObj, 22);

console.log('2. newObj: ', newObj);
console.log('3. fObj: ', fObj);
console.log('-----------------------------------');

const pureObj = getPureState(fObj, 33);

console.log('4. fObj: ', fObj);
console.log('5. pureObj: ', pureObj);
