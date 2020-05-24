// Complete the minimumSwaps function below.
// function minimumSwaps(arr) {
//     console.log(arr);
// }

const acc = [];
let swap = 0;

function minimumSwaps(arr, prevMax = 0) {
    console.log('===============================');
    console.log('START: ', arr, '   | prevMax = ', prevMax);
    if (arr.length === 1) {
        acc.push(arr[0]);
        return;
    }

    const d = Math.round(arr.length / 2);
    const fArr = arr.slice(0, d);
    const sArr = arr.slice(d);

    console.log('fArr: ', fArr);
    console.log('sArr: ', sArr);

    const fMax = fArr.length + prevMax;
    const sMin = fMax + 1;

    console.log('fMax: ', fMax);
    console.log('sMin: ', sMin);

    let fIdx = null;
    let sIdx = null;

    for (let i in fArr) {
        if (fArr[i] > fMax) {
            fIdx = i;
            break;
        }
    }

    for (let i in sArr) {
        if (sArr[i] < sMin) {
            if (prevMax)
                sIdx = +i + fArr.length;
            else
                sIdx = +i + fMax;
            break;
        }
    }

    console.log('1-st IDx: ', fIdx);
    console.log('2-nd IDx: ', sIdx);

    if (fIdx && sIdx) {
        ++swap;
        console.log('<--S--W--A--P-->', swap);
        [arr[fIdx], arr[sIdx]] = [arr[sIdx], arr[fIdx]];
        minimumSwaps(arr, (prevMax) ? fMax : 0);
    } else {
        minimumSwaps(fArr);
        minimumSwaps(sArr, fMax);
    }

    return;
}

const arrD = [ 7, 1, 3, 2, 4, 5, 6 ];
minimumSwaps(arrD); // 5
// ----------------------------------
// const arrA = [ 4, 3, 1, 2 ];
// minimumSwaps(arrA); // 3
// ----------------------------------
// const arrB = [ 2, 3, 4, 1, 5 ];
// minimumSwaps(arrB); // 3
// ----------------------------------
// const arrC = [ 2, 3, 4, 1, 5 ];
// minimumSwaps(arrC); // 3

console.log(acc);
console.log('swap=', swap);
