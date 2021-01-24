function parseSumStr(str){
    const r = [];
    let v = '';

    for (let char of str){
        if (['+', '='].includes(char)) {
            r.push(v);
            v = '';
            continue;
        }
        v += char;
    }
    r.push(+v);

    const f = r[0];
    const s = r[1];
    const sum = r[2];

    if (f === s)
        return { [f]: { val: sum / 2 } }

    return {
        [f]: { d: s, val: (v) => sum - v },
        [s]: { d: f, val: (v) => sum - v }
    };
}

function getRelatives(pSums) {
    const keys = Object.keys(pSums);
    for (const k of keys) {
        const dep = pSums[k].d;
        if (dep) pSums[dep].rel = k;
    }
}

function execValues(pSums) {
    console.log(pSums);
    const keys = Object.keys(pSums);
    let pName = keys.find(key => typeof pSums[key].val === 'number');
    let relName = pSums[pName].rel;

    for (let i = 0; i < keys.length; i++) {
        if (relName) {
            const v = pSums[pName].val;
            console.log('relName: ', relName, '  | v: ', v);
            pSums[relName].val = pSums[relName].val(v);
            pName = relName;
        }

        if (pSums[relName])
            relName = pSums[relName].rel
        else
            relName = null;
    }
}

const solver = function(sums) {
    const pSums = {};
    for (const strExpr of sums) {
        const r = parseSumStr(strExpr);
        Object.assign(pSums, r);
    }

    const keys = Object.keys(pSums);

    if (keys.length === 0)
        return {};
    else if (keys.length === 1) {
        const key = keys[0];
        return { [key]: pSums[key].val }
    }

    getRelatives(pSums);
    execValues(pSums);

    return pSums;
}

//---------------------------------------------------------------
// const args = [
//     'Qh953GRimrXLy+MBAFRKM=6910',
//     'MBAFRKM+Q63rcqX=10437',
//     'Q63rcqX+7SSE2v=9982',
//     '7SSE2v+wsa=11056',
//     'wsa+xY=17246',
//     'xY+xY=16392'
// ];
// console.log(solver(args));

// const result = {
//     '': 7976, +
//     '': 8196, +
//     '': 9050, +
//     '': 2006, +
//     '': 4449, +
//     '': 2461  +
// }

//---------------------------------------------------------------
// const s = new solver(['a+a=4']);
// console.log(s.a === 2);
//---------------------------------------------------------------
// const s = new solver(['a+a=4','a+b=3']);
// console.log(s);
// console.log(s.a === 2);
// console.log(s.b === 1);
//---------------------------------------------------------------
const s = new solver(['c+a=5','a+b=3', 'a+a=4']);
console.log(s);
console.log(s.a === 2);
console.log(s.b === 1);
console.log(s.c === 3);
