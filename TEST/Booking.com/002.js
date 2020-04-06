function funWithAnagrams(text) {
    let first = text[0];
    let second = '';
    let result = [first];
    console.log('result: ', result);
    console.log('--------------------------------------');

    console.log('START: ', text);

    // Write your code here
    text.reverse();

    for (let i = text.length-1; i > 0 ; i--) {
        const f = text[i]
        const s = text[i-1];

        if (compareWords(f, s)) {
            text.pop();
        }
    }

    result = text.sort();

    console.log('RESULT: ', result);

    return result;
}

const compareWords = (f, s) => {
    console.log(f, s);
    let checkWord = s.split('');
    let chars = f.split('');
    // console.log(checkWord);

    for (let char of chars) {
        // console.log('------> ', char);
        const charIndex = checkWord.indexOf(char);
        if (charIndex >= 0) {
            // console.log(charIndex, ' ----------------------------------------');
            // console.log(checkWord);
            checkWord.splice(charIndex, 1);
        }
        console.log(checkWord.length);
    }
    console.log(' ----------------------------------------');

    return (checkWord.length === 0) ? true : false;
}

const fArg = [ 'code', 'aaagmnrs', 'anagrams', 'doce' ];
const result = funWithAnagrams(fArg);
console.log(result);

// -----------------------------------------------------------------------------------------------
// const months = ['Jan', 'March', 'April', 'June'];
// console.log(months.indexOf('April'));
// months.splice(1, 1);
// console.log(months);
