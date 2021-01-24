// dosn't work
function topFrequent(nums, k) {
    const fNum = {};

    for (let i of nums) {
        const key = `_${i}`;
        fNum[key] = fNum[key] ? ++fNum[key] : 1;
    }

    return Object.keys(fNum)
        .map(key => ({ [key.substring(1)]: fNum[key] }))
        .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
        .map(item => +Object.keys(item)[0])
        .splice(0, k);
}

topFrequent([1, 1, 1, 5, 5, 2, 2, 2], 1);                           // [1]
topFrequent([1, 1, 1, 5, 5, 2, 2, 2], 2);                           // [1, 2]
topFrequent([1, 1, 1, 5, 5, 2, 2, 3], 3);                           // [1, 5, 2]
topFrequent([0, 1, 2, 0, 1, 2], 3);                                 // [0, 1, 2]
topFrequent([0, 1, 2, 0, 1, 2, 1], 3);                              // [1, 0, 2]
topFrequent([2, 6, 4, -1, 6, 6, 9, 0, 3, 4, 5, -1, -2, -1], 5);     // [6, -1, 4, 2, 9]
topFrequent([9, 8, 7, 6, 5, 4, 3, 2, 1], 100);                      // [9, 8, 7, 6, 5, 4, 3, 2, 1]
topFrequent([9, 8, 7, 6, 5, 4, 3, 2, 1, 1], 100);                   // [1, 9, 8, 7, 6, 5, 4, 3, 2]
