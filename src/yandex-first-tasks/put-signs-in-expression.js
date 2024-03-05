const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split("\n");

  return result[1].split(" ").map(Number);
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result);
}

function program() {
  const numbersArray = getInput();

  const result = putSignsInExpression(numbersArray);

  sendOutput(result);
}

/**
 * @param {number[]} numSequence
 * @returns {string}
 */
function putSignsInExpression(numSequence) {
  let index = findEvenFromSide(numSequence);

  if (index === 0) {
    let oddsAmountAfter = countOdds(numSequence, 1, numSequence.length);

    if (oddsAmountAfter % 2 === 0) {
      return "+".repeat(numSequence.length - 1);
    } else {
      return "x" + "+".repeat(numSequence.length - 2);
    }
  } else if (index === numSequence.length - 1) {
    let oddsAmountBefore = countOdds(numSequence, 0, numSequence.length - 1);

    if (oddsAmountBefore % 2 === 0) {
      return "+".repeat(numSequence.length - 1);
    } else {
      return "+".repeat(numSequence.length - 2) + "x";
    }
  } else {
    let result = "";

    let oddsAmountBefore = countOdds(numSequence, 0, index);
    let oddsAmountAfter = countOdds(numSequence, index + 1, numSequence.length);

    if (oddsAmountBefore % 2 === 0) {
      result = "+".repeat(index);
    } else {
      result = "+".repeat(index - 1) + "x";
    }

    if (oddsAmountAfter % 2 === 0) {
      result += "+".repeat(numSequence.length - 1 - index);
    } else {
      result += "x" + "+".repeat(numSequence.length - index - 2);
    }

    return result;
  }
}

function countOdds(array, startIndex, endIndex) {
  let oddCount = 0;

  for (let i = startIndex; i < endIndex; ++i) {
    if (array[i] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount;
}

function findEvenFromSide(numSequence) {
  let i = 0;
  let j = numSequence.length - 1;

  while (i <= j) {
    if (numSequence[i] % 2 !== 0) {
      return i;
    }
    if (numSequence[j] % 2 !== 0) {
      return j;
    }
    i++;
    j--;
  }
}

module.exports = { putSignsInExpression };
