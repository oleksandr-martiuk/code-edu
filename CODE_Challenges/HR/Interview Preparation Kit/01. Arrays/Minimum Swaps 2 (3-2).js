const acc = [];
let swaps = 0;

function minimumSwaps(arr, prevMax = 0) {    
    console.log('===============================');
    console.log('>>> START: ', arr);
    if (arr.length === 1) {
        acc.push(arr[0]);
        return;
    }

    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            acc.push(arr[1], arr[0]);
            ++swaps;
            console.log('<--S--W--A--P-->', swaps);
        } else {
            acc.push(arr[0], arr[1]);
        }
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

    const prepMax = (prevMax) ? fMax-fArr.length : 0;

    if (fIdx && sIdx) {
        ++swaps;
        console.log('<--S--W--A--P-->', swaps);
        [arr[fIdx], arr[sIdx]] = [arr[sIdx], arr[fIdx]];
        minimumSwaps(arr, prepMax);
    } else {
        minimumSwaps(fArr, prepMax);
        minimumSwaps(sArr, fMax);
    }
};

const arrE = [ 3, 7, 6, 9, 1, 8, 10, 4, 2, 5 ]; // 9
minimumSwaps(arrE);
console.log('swaps: ', swaps);
