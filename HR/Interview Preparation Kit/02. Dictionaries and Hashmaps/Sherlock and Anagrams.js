
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    let result = 0;

    const stopPoint = s.length - 1;
    for (let subLen = 1; subLen <= stopPoint; subLen++) {
        result += getResultForStrNum(s, subLen);
    }

    return result;
}

const getResultForStrNum = (s, subLen) => {
    let subResult = 0;

    for (let i = 0; i < s.length-subLen; i++) {
        const subS = s.substring(i, i + subLen);
        const compS = s.substring(i + 1);

        subResult += compareStrs(subS, compS, subLen);
    }

    return subResult;
}

const compareStrs = (subS, compS, subLen) => {
    let compareRes = 0;

    for (let idx = 0; idx < compS.length; idx++) {
        const nextS = compS.substring(idx, idx + subLen).trim();
        if (subS.length > nextS.length) break;

        compareRes += getIncludedRes(subS, nextS);
    }

    return compareRes;
}

const getIncludedRes = (subS, nextS) => {
    if (nextS.length == 1) {
        return (subS === nextS) ? 1 : 0;
    }

    let nextArr = nextS.split('');
    for (let y = 0; y < subS.length; y++) {
        const charId = nextS.indexOf(subS[y]);
        if (charId === -1) {
            return 0;
        }
        nextArr.splice(charId, 1);
        nextS = nextArr.join('');
    }

    return 1;
}
