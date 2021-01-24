function repeatedString(s, n) {
    const firstL = 'a';
    const lRepeats = getRepeats(s, firstL);

    const tail = n % s.length;
    const last = s.slice(0, tail);

    const result = Math.floor(n / s.length) * lRepeats + getRepeats(last, firstL);

    return result;
}

function getRepeats(str, letter) {
    return str.split('').filter(l => l === letter).length;
}
