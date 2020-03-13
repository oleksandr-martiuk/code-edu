// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    let result = 0; // variable for counting anogram-repeats

    // 1. moving by numbers of sub-string (before 1/2 str)
    for (let subStrLen = 1; subStrLen < Math.floor(s.length/2); subStrLen++) {
        result += getResultForStrNum(s, subStrLen);
    }

    return result;
}

const getResultForStrNum = (s, strLen) => {
    for (let i = 0; i < i.length; i++) {
      
    }
    return 1;
};
