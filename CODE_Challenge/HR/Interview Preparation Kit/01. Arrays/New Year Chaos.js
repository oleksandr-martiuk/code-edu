function swap(vp, pv, pos, val, n) {
    const swapPos = pos + n;
    const swapVal = pv[swapPos];

    pv[swapPos] = val;
    pv[swapPos-1] = swapVal;
    vp[swapVal] -= 1;
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    if (q.length < 2) {
        console.log('Too chaotic');
        return;
    };

    const [vp, pv] = getConvertedQ(q)
    let bribes = 0;

    for (let v = q.length; v > 0; v--) {
        const p = vp[v];
        const diff = v - p;

        if (diff === 0) continue;

        if (diff < 0 || diff > 2) {
            console.log('Too chaotic');
            return;
        };

        swap(vp, pv, p, v, 1);
        if (diff === 2)
            swap(vp, pv, p, v, 2);

        bribes += diff;
        vp[v] = v;
    }

    console.log(bribes);
}
