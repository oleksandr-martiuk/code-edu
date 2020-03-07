// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let arr = new Array(n).fill(0);

    for (let i = 0; i < queries.length; i++) {
        const line = queries[i];
        for (let y = line[0]-1; y < line[1]; y++) {
            arr[y] += line[2];
        }
    }

    return Math.max(...arr);
}
