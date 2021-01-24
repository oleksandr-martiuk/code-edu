// correct sollution
function topFrequent(nums, k) {
    var hf={}, hi={};

    for(let i=0; i<nums.length; i++) {
        let n = nums[i];
        hf[n] = hf[n]+1 || 1;
        if(hi[n]===undefined)
            hi[n] = i;
    }

    return Object.keys(hf)
        .map(n=>+n)
        .sort((a,b) => hf[b]-hf[a] || hi[a]-hi[b])
        .slice(0,k);
}

topFrequent([1, 1, 1, 5, 5, 2, 2, 2], 1);                           // [1]
topFrequent([1, 1, 1, 5, 5, 2, 2, 2], 2);                           // [1, 2]
topFrequent([1, 1, 1, 5, 5, 2, 2, 3], 3);                           // [1, 5, 2]
topFrequent([0, 1, 2, 0, 1, 2], 3);                                 // [0, 1, 2]
topFrequent([0, 1, 2, 0, 1, 2, 1], 3);                              // [1, 0, 2]
topFrequent([2, 6, 4, -1, 6, 6, 9, 0, 3, 4, 5, -1, -2, -1], 5);     // [6, -1, 4, 2, 9]
topFrequent([9, 8, 7, 6, 5, 4, 3, 2, 1], 100);                      // [9, 8, 7, 6, 5, 4, 3, 2, 1]
topFrequent([9, 8, 7, 6, 5, 4, 3, 2, 1, 1], 100);                   // [1, 9, 8, 7, 6, 5, 4, 3, 2]
