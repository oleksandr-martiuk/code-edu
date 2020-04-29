const verify = (str) => {
    const openBrs = ['(', '[', '<']
    const closeBrs = [')', ']', '>']

    const stack = [];
    const first = str[0];

    if (closeBrs.includes(first)) {
        return false;
    } else if (openBrs.includes(first)) {
        stack.push(first);
    }

    for (let i = 1; i < str.length; i++) {
        const ch = str[i];

        if (!stack.length && closeBrs.includes(ch)) {
            return false;
        }

        if (openBrs.includes(ch)) {
            stack.push(ch);
        }

        if (closeBrs.includes(ch)) {
            const lastStackCh = stack[stack.length - 1];

            if (ch === closeBrs[0] && lastStackCh === openBrs[0]) {
                stack.pop();
            } else if (ch === closeBrs[1] && lastStackCh === openBrs[1]) {
                stack.pop();
            } else if (ch === closeBrs[2] && lastStackCh === openBrs[2]) {
                stack.pop();
            }
        }
    }

    return !stack.length;
}

// () [] <>
const str1 = '([<>]([]))';
const str2 = '([)]';
const str3 = '( [ <> () ] <> )';
const str4 = '  (   [)';
const str5 = 'before (middle []) after ';
const str6 = ' )()';

console.log('str1 = ', verify(str1), '   ======>   ', str1);
console.log('str2 = ', verify(str2), '   ======>   ', str2);
console.log('str3 = ', verify(str3), '   ======>   ', str3);
console.log('str4 = ', verify(str4), '   ======>   ', str4);
console.log('str5 = ', verify(str5), '   ======>   ', str5);
console.log('str6 = ', verify(str6), '   ======>   ', str6);
