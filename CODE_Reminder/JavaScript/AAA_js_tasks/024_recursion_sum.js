const data = [[[1,2,3,4,5],[[1],[2],[3],[4],[5],[6],[[1]]],[9,8,7,6,5,[1,2,3]]],[10,20,30,40,50],[21,33,55,66,77,88],[11,12,13,14,15,16,17,18,19],[[1000,1234],154,2122],[45,66,88,99,100,101]];

const sumNumbers = (arr) => arr.reduce((sum, item) => sum += (Array.isArray(item) ? sumNumbers(item) : item), 0);
console.log(sumNumbers(data));
