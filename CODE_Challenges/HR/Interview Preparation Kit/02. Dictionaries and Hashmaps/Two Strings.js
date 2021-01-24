function twoStrings(s1, s2) {
    const s2arr = s2.split('');
    for (let i = 0; i < s1.length; i++) {
        if (s2arr.includes(s1[i])) {
            return 'YES';
        }
    }
    return 'NO';
}

// -----------------------------------------------------------------------------

function twoStrings(s1, s2) {
    const s2arr = s2.split('');

    for (let i = 0; i < s1.length; i++) {
        for (let y = 0; y < s2arr.length; y++) {
            if (s1[i] === s2[y]) {
                return 'YES';
            }
        }
    }
    return 'NO';
}
