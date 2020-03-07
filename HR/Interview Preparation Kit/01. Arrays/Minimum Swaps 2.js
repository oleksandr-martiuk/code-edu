// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let normI = -1;
    let swapCount = 0;

    for (let num = 1; num <= arr.length; num++) {
        const currI = arr.indexOf(num);
        normI++;

        if (currI === normI) {
            console.log(arr);
            continue;
        } else {
            const swapI = num-1;
            [arr[swapI], arr[currI]] = [arr[currI], arr[swapI]];
            console.log(arr);
            swapCount++;
        };
    }
    console.log('Final arr: ', arr);

    return swapCount;
}
