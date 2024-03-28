const fs = require("node:fs");

program();

function getInput() {
  const fileContent = fs.readFileSync("input.txt", "utf-8").split('\n');

  return BigInt(fileContent[0]);
}

function program() {
  let number = getInput();

  let result = findRationalNumber(number);

  sendOutput(result);
}

function sendOutput(result) {
  fs.writeFileSync('output.txt', result.join('/'));
}

function findRationalNumber(number) {
  // console.log(number);

  if (number === 1n) {
    return [1, 1];
  }
  

  let progressionRowBefore = findProgressionNumber(number);

  let firstElementInDiagonal =
    ((1n + progressionRowBefore) * progressionRowBefore) / 2n + 1n;
  // console.log("firstElementInDiagonal:", firstElementInDiagonal);
  let lastElementInDiagonal =
    ((1n + progressionRowBefore + 1n) * (progressionRowBefore + 1n)) / 2n;
  // console.log("lastElementInDiagonal", lastElementInDiagonal);

  let amountOfNumsInDiagonal = progressionRowBefore + 1n;


  let myFractionDistance = number - firstElementInDiagonal;

  let upperNumber;
  let lowerNumber;

  if (amountOfNumsInDiagonal % 2n == 0n) {
    lowerNumber = myFractionDistance + 1n;
    upperNumber = amountOfNumsInDiagonal - myFractionDistance;
  } else {
    upperNumber = myFractionDistance + 1n;
    lowerNumber = amountOfNumsInDiagonal - myFractionDistance;
  }
  return [Number(upperNumber), Number(lowerNumber)];
}

function findProgressionNumber(number) {
  let left = 1n;
  let right = number;

  while (left < right) {
    let middle = (left + right + 1n) / 2n;

    let arithmeticSum = ((1n + middle) * middle) / 2n;

    if (arithmeticSum >= number) {
      right = middle - 1n;
    } else {
      left = middle;
    }
  }

  return left;
}

module.exports = { findProgressionNumber, findRationalNumber };
