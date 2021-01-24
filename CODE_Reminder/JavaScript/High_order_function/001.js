// High order functions:
// ---------------------------------------------------------------------------

// 1. функции, которые принимаю другие ф-и в фиде параметра (callback)
// ---------------------------------------------------------------------------
function mapArr(arr, f) {
    const result = [];
    for (let el of arr) {
        result.push(f(el));
    }
    return result;
}

const names = ['Anna', 'Igor', 'Eleonora', 'Alexander'];
const cbFun = (n) => n.length;

const res = mapArr(names, cbFun);
console.log(res);

// 2. функции, которые возвращают другие фукнции
// ---------------------------------------------------------------------------
const greeting = (name) => {
    return (age) => {
        return `Hi friend! My name is ${name}. And I'm ${age} years old`;
    }
}

// 1-st try
const letMe = greeting('Alex');
const resultStr = letMe(66);
console.log(resultStr);
// 2-nd try
console.log(greeting('Denis')(55));

// ---------------------------------------------------------------------------
function question(job) {
    const jobDic = {
        dev: 'what is the programming language do you use?',
        tutor: 'what is the subject do you teach?'
    }
    return (name) => {
        return `Dear ${name}, ${jobDic[job]}`;
    }
}

console.log(question('dev')('Alex'));
console.log(question('tutor')('Mariya'));
