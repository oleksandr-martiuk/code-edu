function hourglassSum(arr) {
    console.log(arr);

    let result = [];
    for (let r = 1; r < arr.length-1; r++) {
        for (let c = 1; c < arr[r].length-1; c++) {
            const aSum =
                arr[r-1][c-1] +
                arr[r-1][c]   +
                arr[r-1][c+1] +
                arr[r][c]     +
                arr[r+1][c-1] +
                arr[r+1][c]   +
                arr[r+1][c+1];

            result.push(aSum);
        }
    }

    result.sort((a, b) => b-a);

    return result[0];
}
