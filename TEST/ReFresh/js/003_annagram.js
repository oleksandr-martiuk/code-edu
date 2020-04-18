const convertStr = (str) => {
    str = str.replace(/\s/g,'');
    // str = str.replace(/[\W\d_]/g, ''); // left just letters
    return [...str.toLowerCase()].sort().join('')
};

const compare = (str1, str2) => {
    str1 = convertStr(str1);
    str2 = convertStr(str2);

    if (str1.length !== str2.length) {
        return false;
    }

    return (str1 === str2)
}

// -----------------------------------------------------------------

console.log(compare('sosme', ' e  o m  s s '));
console.log(compare('Friend', ' finder '));
