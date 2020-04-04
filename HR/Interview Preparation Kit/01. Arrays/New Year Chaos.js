function minimumBribes(q) {
    const len = q.length;
    let result = 0;

    for (let name = len; name > 0; name--) {
        const currI = q.indexOf(name);
        const normI = name-1;

        const iDiff = normI - currI;
        if (iDiff <= 0) {
            continue;
        } else if (iDiff > 2) {
            result = 'Too chaotic';
            break;
        }

        const elem = q[currI];
        q.splice(currI, 1);
        q.splice(normI, 0, elem);

        result += iDiff;
    }

    console.log(result);
}
