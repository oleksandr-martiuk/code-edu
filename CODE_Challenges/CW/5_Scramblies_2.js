function scramble(str1, str2) {
    let occurences = str1
        .split("")
        .reduce((acc, cur) => {
            acc[cur] ? acc[cur]++ : acc[cur] = 1;
            return acc;
        }, {});
    return str2
        .split("")
        .every((character) => --occurences[character] >= 0);
}

scramble('rkqodlwr','world');
