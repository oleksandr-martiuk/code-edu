const people = ['Alex', 'Jane', 'Melissa', 'Jane', 'Ban', 'Jane'];
const debug = [];

const uniqueArr = people.filter((item, index) => {
    debug.push({ item, index, indexOf: people.indexOf(item)});
    return index === people.indexOf(item);
})

console.table(uniqueArr);
console.table(debug);