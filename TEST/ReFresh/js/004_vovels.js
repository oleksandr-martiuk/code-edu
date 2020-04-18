const findVovels = (str) => 
    str
        .toLowerCase()
        .split('')
        .filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char))
        .length;

console.log(findVovels('Hello dear friend!'));
console.log(findVovels('  y - o '));
console.log(findVovels('SomE '));
console.log(findVovels(' Bzzzzz '));
