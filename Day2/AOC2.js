const { readLines } = require('../helpers');

const input = readLines('./input.txt');

let ranges = input.split(',');
let sum = 0;

for (let i = 0; i < ranges.length; i++) {
    let workingRange = ranges[i].trim().split('-');
    let start = workingRange[0];
    let end = workingRange[1];

    sum = sum + sumDupes(start, end);
}

console.log('answer: ' + sum);

// helpers

function sumDupes(start, end) {
    let result = 0;

    start = parseInt(start);
    end = parseInt(end);

    for (let i = start; i <= end; i++) {
        if (hasRepeatingPattern(i)) {
            result = result + i;
        }
    }

    return result;
}

function hasRepeatingPattern(num) {
    const str = num.toString();
    const len = str.length;

    for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
        if (len % patternLen === 0) {
            const pattern = str.substring(0, patternLen);
            const repeated = pattern.repeat(len / patternLen);

            if (repeated === str) {
                return true;
            }
        }
    }

    return false;
}