const fs = require('fs');

function readInput(filename) {
  return fs.readFileSync(filename, 'utf8').trim();
}

function readLines(filename) {
  return readInput(filename).split('\n');
}

function readNumbers(filename) {
  return readLines(filename).map(Number);
}

module.exports = { readInput, readLines, readNumbers };