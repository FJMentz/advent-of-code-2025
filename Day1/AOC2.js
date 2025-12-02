const { readLines } = require('../helpers');

const input = readLines('./input.txt');

let currentPosition = 50;
let zeros = 0;

for (let i = 0; i < input.length; i++) {
    let change = input[i];
    let changeDirection = change.substring(0, 1);
    let changeAmount = Number(change.substring(1));

    let startPos = currentPosition;
    
    if (changeDirection === "L") {
        if (startPos !== 0 && changeAmount >= startPos) {
            zeros += Math.floor((changeAmount - startPos) / 100) + 1;
        } else if (startPos === 0 && changeAmount >= 100) {
            zeros += Math.floor(changeAmount / 100);
        }
        currentPosition = startPos - changeAmount;
    } else {
        if (startPos !== 0 && startPos + changeAmount >= 100) {
            zeros += Math.floor((startPos + changeAmount) / 100);
        } else if (startPos === 0 && changeAmount >= 100) {
            zeros += Math.floor(changeAmount / 100);
        }
        currentPosition = startPos + changeAmount;
    }

    // Proper wrapping for range 0-99
    currentPosition = ((currentPosition % 100) + 100) % 100;
}

console.log('answer: ' + zeros);