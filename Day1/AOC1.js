const { readLines } = require('../helpers');

const input = readLines('./input.txt');

let currentPosition = 50;
let zeros = 0;

for (let i = 0; i < input.length; i++) {
    let change = input[i];
    let changeDirection = change.substring(0, 1);
    let changeAmount = Number(change.substring(1));

    if (changeDirection === "L") {
        currentPosition = currentPosition - changeAmount;
    } else if (changeDirection === "R") {
        currentPosition = currentPosition + changeAmount;
    }

    // Proper wrapping for range 0-99
    currentPosition = ((currentPosition % 100) + 100) % 100;

    if (currentPosition === 0) {
        zeros++;
    }
}

console.log('answer: ' + zeros);