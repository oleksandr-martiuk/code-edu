let str = 'abcdefghijklpo';

// TODO: 1-st version
const result = str.split( /(?=(?:...)*$)/ ).join('\'');
console.log({ result, str });

// TODO: 2-nd version
// const result = str.split('')
//    .reduce((acc, item) => {
//       acc.unshift(item);
//       return acc;
//    }, [])
//    .join('')
//    .match(/.{1,3}/g)
//    .map(item => item.split('').reverse().join(''))
//    .reverse()
//    .join('\'');
//
// console.log(result);

