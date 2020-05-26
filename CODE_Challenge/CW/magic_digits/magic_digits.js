// 0, 1, 3, 7, 14, 25, 41
function getTotalByLen(n) {
    const acc = [0, 1];

    if (n > 1) {
        let point = 0;
        let state = 0;
        let total = 0;

        for (let i = 2; i < n; i++) {
            point++;
            state += point;
            total = total + state;

            acc.push(total + i);
        }
    }

    return acc;
}

function magicDigits (a,k) {
    const str = concatStr(a, k);
    // console.log(str);
    const magicNums = countUniqueMagicNums(str);
    if (!magicNums) return 0;

    const len = str.length;
    const totalRange = getTotalByLen(len);
    // console.log(totalRange);

    let total = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0' || str[i] === '5')
            total += +totalRange[i];
    }

    console.log(total + magicNums);
}

function concatStr(a, k) {
    const s = a.trim();
    const start = s.replace(/^0+/, '');
    const rest = s.repeat(k-1);

    return start + rest;
}

function countUniqueMagicNums(str) {
    let five = 0;
    let zero = 0;

    const s = str.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') five = 1;
        else if (s[i] === '5') zero = 1;

        if (five && zero) break;
    }

    return five + zero;
}

// magicDigits ('1256', 1);
magicDigits ('13990', 2);
// magicDigits ('555', 2);

// magicDigits ('5', 1);
// magicDigits ('55', 1);
// magicDigits ('555', 1);
// magicDigits ('5555', 1);
// magicDigits ('55555', 1);
// magicDigits ('555555', 1);
// magicDigits ('5555555', 1);
// magicDigits ('55555555', 1);

// magicDigits ('1256', 1);
// magicDigits ('13990', 2);
// magicDigits ('13993', 2);

// magicDigits ('00055555555', 2);
// magicDigits ('0540543', 2);
// magicDigits ('0123468', 2);
// magicDigits ('0123468', 1);
