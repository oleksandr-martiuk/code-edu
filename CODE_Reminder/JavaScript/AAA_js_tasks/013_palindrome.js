const palindrome = str => {
    str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(palindrome('racecar'));  // true
console.log(palindrome('table'));    // false
