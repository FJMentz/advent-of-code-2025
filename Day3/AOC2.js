const { readLines } = require('../helpers');

const input = readLines('./input.txt');
// const input = readLines('./example.txt');

let banks = input;
let answer = 0;

for (let i = 0; i < input.length; i++) {
    let joltage = "";
    let curHigh = -1;
    let curInd = -1;
    for(j = 0; j < 12; j++) {
        curInd = findHighestExcluding(banks[i],curInd, j);
        curHigh = banks[i][curInd];
        joltage = joltage + curHigh + "";
    }
    curHigh = -1;
    curInd = -1;
    console.log(joltage);
    answer = answer + Number(joltage);
    joltage = "";
}

console.log('answer: ' + answer);

function findHighestExcluding(bank, i, j) {
    let highest = 0;
    let highestIndex = 0;
    for(let h = i + 1; h < (bank.length - (11-j)); h++) {
        if (bank[h] > highest) {
            highest = bank[h];
            highestIndex = h;
        }
    }
    return highestIndex;
}