const { readLines } = require('../helpers');

const input = readLines('./input.txt');
// const input = readLines('./example.txt');

let lessThan4 = 4;
let paper = '@';
// row, col
const directions = [
    [-1, 0], [-1, 1], [0, 1], [1, 1],
    [1, 0], [1, -1], [0, -1], [-1, -1]
];

let answer = 0;

let grid = input.map(line => line.split(''));
console.log(grid);

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == paper) {
            if (getPaperNeighbors(grid, i, j) < lessThan4) {
                answer++;
            }
        }
    }
}

console.log('answer: ' + answer);

function getPaperNeighbors(grid, row, col) {
    let neighbors = 0;

    for (const [dr, dc] of directions) {
        const r = row + dr;
        const c = col + dc;

        // Stay in boundries
        if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
            if (grid[r][c] == paper) {
                neighbors++;
            }
        }
    }

    console.log(neighbors);
    return neighbors;
}