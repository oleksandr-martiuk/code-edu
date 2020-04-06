console.log(verify("---(++++)----"));
// console.log(verify(""));
// console.log(verify("before (middle []) after "));
// console.log(verify(")("));
// console.log(verify("<( >)"));
// console.log(verify("( [ <> () ] <> )"));
// console.log(verify("( [ <> () ] <> ) "));
// console.log(verify("  (   [)"));

function verify(str) {
    const parGroups = ['(', ')','[', ']','<', '>'];
    const state = [];

    for (const char of str) {
        if (!parGroups.includes(char)) continue;
        console.log(state);

        const curr = getGroup(char);

        const len = state.length - 1;
        if (len > 0) {
            const prev = state[len-1];

            if (prev === curr.name) {
                state.pop();
            } else if (curr.index === 0) {
                if (prev !== curr.name) return 0;
                state.push(curr.name);
                continue;
            }
        }
    }

    return 1;
}

function getGroup(char) {
    const parGroups = [
        ['(', ')'],
        ['[', ']'],
        ['<', '>']
    ];

    for (let i in parGroups) {
        const group = parGroups[i];
        if (group.includes(char)) {
            return {
                name: i,
                index: group.indexOf(char)
            };
        }
    }
}
