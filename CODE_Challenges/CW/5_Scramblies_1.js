function scramble(str1, str2) {
    const initStar = {};

    for (let l of str1)
        initStar[l] = (initStar[l]) ? ++initStar[l] : 1;

    for (let l of str2) {
        if (initStar[l] && initStar[l] > 0)
            --initStar[l];
        else
            return false;
    }

    return true;
}

scramble('rkqodlw','world');                // true
scramble('cedewaraaossoqqyt','codewars');   // true
scramble('katas','steak');                  // false
scramble('scriptjava','javascript');        // true
scramble('scriptingjava','javascript');     // true
scramble('scriptsjava','javascripts');      // true
scramble('jscripts','javascript');          // false
scramble('aabbcamaomsccdd','commas');       // true
