// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    console.log('----------[ ', s, ' ]----------');

    let result = 0;
    for (let i = 0; i < s.length-1; i++) {
        result += checkSubStr(s, i);
        console.log('---next---');
    }

    console.log('Result: ', result);
}

const checkSubStr = (s, i) => {
    let repeat = 0;
    for (let y = i+1; y < s.length; y++) {
        if (s[y] === s[i]) {
            console.log(`${s[y]}  === ${s[i]}`)
            repeat += 1;
        }
    }

    return repeat;
};
