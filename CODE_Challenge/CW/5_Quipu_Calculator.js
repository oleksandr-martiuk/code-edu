function calculate(quipu) {
    const ex = [];

    for (const i in quipu) {
        const pr = (i > 0) ? quipu[i-1] : null;
        const ch = quipu[i];
        const last = ex.length-1;

        if (['(',')','*','/','+','-'].includes(ch))
            ex.push(ch);

        if (ch === '@') {
            if (pr === '@')
                ex[last] += 1;
            else if (pr === '~' && ex[last]%10 === 0)
                ex[last] = ex[last] * 10 + 1;
            else if (pr === '~')
                ex[last] = ex[last] * 10 + 1;
            else if (!['~', '@'].includes(pr))
                ex.push(1);
        }

        if (ch === '~' && pr === '~')
            ex[last] = ex[last] * 10;
    }

    const result = eval(ex.join(''));
    const finRes = convertRes(result);

    return finRes;
}

function convertRes(num) {
    let s = `${num}`;
    let r = '';

    for (let ch of s)
        r += (ch === '0') ? '~' : '@'.repeat(+ch) + '~';

    if (s[s.length-1] !== '0')
        r = r.slice(0, -1);

    return r;
}

// calculate("@~@@*@@");               // "@@~@@@@"         // 12*2=24
// calculate("@~@@+@@~~");             // "@@@~@@"          // 12+20=32
// calculate("@~~~~@+@~@@");           // "@~~~@~@@@"       // 10001+12=10013
// calculate("@~~-@@");                // "@@@@@@@@"        // 10-2=8
// calculate('@~~*@@/@@@@-@@');        // "@@@"             // 10*2/4-2=3
// calculate("(@~@@+@~@@@)*@~~~~");    // "@@~@@@@@~~~~"    // (12+13)*1000=25000
