const { readLines } = require('../helpers');

const input = readLines('./input.txt');

let ranges = input[0].split(',');
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

    if (len % 2 === 0) {
        let pattern1 = str.substring(0, len/2);
        let pattern2 = str.substring(len/2, len);

        return pattern1 === pattern2;
    }

    return false;
}