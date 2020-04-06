'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'funWithAnagrams' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 */

function funWithAnagrams(text) {
    // Write your code here
    text.reverse();

    let first = text[0];
    let second = '';
    let result = [first];

    for (let i = 1; i = text.length-1; i++) {
        first = result[result.length - 1];
        second = text[i];
        if (compareWords(f, s)) result.push(second);
    }

    // for (let i = text.length-1; i > 0 ; i--) {
    //     const f = text[i]
    //     const s = text[i-1];

    //     if (compareWords(f, s)) {
    //         text.pop();
    //     }
    // }

    // const result = text.sort();

    // return result;
}

const compareWords = (f, s) => {
    console.log(f, s);
    let checkWord = s.split('');
    let chars = f.split('');

    for (let char of chars) {
        const charIndex = checkWord.indexOf(char);
        if (charIndex >= 0) {
            checkWord.splice(charIndex, 1);
        }
    }

    return (checkWord.length === 0) ? true : false;
}


function main() {