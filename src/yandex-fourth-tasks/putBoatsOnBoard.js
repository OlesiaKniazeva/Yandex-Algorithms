const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("input.txt", "utf8").split("\n");

  return fileContent[0];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  let cellsAmount = getInput();

  let result = countBoatsAmount(cellsAmount);

  sendOutput(result);
}

function totalSpaceTaken(coefficient) {
  coefficient = BigInt(coefficient);

  let boatsAmount = (coefficient * (coefficient + 1n)) / 2n;
  // console.log("boats:", boatsAmount);

  let gaps = boatsAmount - 1n;
  let spaceAllBoatsTake = 0n;

  spaceAllBoatsTake =  coefficient * (coefficient + 1n) * (coefficient + 2n) / 6n;
  
  // console.log("spaceAllBoatsTake:", spaceAllBoatsTake);

  // console.log("total space take: ", spaceAllBoatsTake + gaps);

  return spaceAllBoatsTake + gaps;
}

function countBoatsAmount(cellsAmount) {
  // console.log("start: ", cellsAmount);

  if (cellsAmount < 2n) {
    return cellsAmount;
  }

  let left = BigInt(1);
  let right =  BigInt(cellsAmount);

  while (left < right) {
    let suggestedCoef = BigInt((left + right + 1n) / 2n);
    // console.log("suggestedCoef", suggestedCoef);

    if (totalSpaceTaken(suggestedCoef) <= cellsAmount) {
      left = suggestedCoef
    } else {
     right = suggestedCoef - 1n
    }
    // console.log(`left: ${left}, right: ${right}`);
  }

  return Number(left);
}

module.exports = { countBoatsAmount, totalSpaceTaken };
