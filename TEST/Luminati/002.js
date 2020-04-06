console.log(verify("---(++++)----"));
console.log(verify(""));
console.log(verify("before (middle []) after "));
console.log(verify(")("));
console.log(verify("<( >)"));
console.log(verify("<( >) >"));
console.log(verify("( [ <> () ] <> )"));
console.log(verify("  (   [)"));

function verify(str) {
    const open = ['(', '[', '<'];
    const close = [')', ']', '>'];
    const total = [...open, ...close];
    const pers = {
        '(': ')',
        '[': ']',
        '<': '>'
    }
    const state = [];
    let prev = '';

    for (const char of str) {
        if (!total.includes(char)) continue;

        if (state.length === 0 && close.includes(char)) return 0;

        if (open.includes(prev) && close.includes(char) && pers[prev] !== char) return 0;

        if (open.includes(char)) {
            prev = char;
            state.push(char);
        } else if (close.includes(char) && pers[prev] === char) {
            state.pop();
            prev = state[state.length-1];
        }
    }

    return (state.length) ? 0 : 1;
}
