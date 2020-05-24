let swaps = 0;

function calcSwaps(arr, prevMax = 0) {
    if (arr.length === 1)
        return;

    if (arr.length === 2) {
        if (arr[0] > arr[1])
            ++swaps;
        return;
    }

    const d = Math.round(arr.length / 2);
    const fArr = arr.slice(0, d);
    const sArr = arr.slice(d);

    const fMax = fArr.length + prevMax;
    const sMin = fMax + 1;

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

    const prepMax = (prevMax) ? fMax-fArr.length : 0;

    if (fIdx && sIdx) {
        ++swaps;
        [arr[fIdx], arr[sIdx]] = [arr[sIdx], arr[fIdx]];
        calcSwaps(arr, prepMax);
    } else {
        calcSwaps(fArr, prepMax);
        calcSwaps(sArr, fMax);
    }
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    calcSwaps(arr);
    return swaps;
}