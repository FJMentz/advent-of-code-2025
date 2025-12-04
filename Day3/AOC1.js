const { readLines } = require('../helpers');

const input = readLines('./input.txt');
// const input = readLines('./example.txt');

let banks = input;
let answer = 0;

for (let i = 0; i < input.length; i++) {
    // Probably some code will go here
    let tens = findHighest(banks[i])*10;
    let ones = findSecondHighest(banks[i], tens/10);
    let joltage = tens + ones;
    console.log(joltage)
    answer += joltage;
}

console.log('answer: ' + answer);

function findHighest(bank) {
    let highest = 0;
    for(let h = 0; h < bank.length -1; h++) {
        if (bank[h] > highest) {
            highest = bank[h];
        }
    }
    return Number(highest);
}

function findSecondHighest(b, h) {
    let secondHighest = 0;
    let indexOfFirstHighest = b.indexOf(h);
    for(let s = indexOfFirstHighest+1; s < b.length; s++) {

        if (b[s] > secondHighest) {
            secondHighest = b[s];
        }
    }
    return Number(secondHighest);
}