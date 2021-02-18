const findVowels = (str) =>
    str
        .toLowerCase()
        .split('')
        .filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char))
        .length;

console.log(findVowels('Hello dear friend!'));
console.log(findVowels('  y - o '));
console.log(findVowels('SomE '));
console.log(findVowels(' Bzzzzz '));
