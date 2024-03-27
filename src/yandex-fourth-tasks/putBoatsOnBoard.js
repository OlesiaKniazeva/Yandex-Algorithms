const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("input.txt", "utf8").split("\n");

  return Number(fileContent[0]);
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
  let boatsAmount = (coefficient * (coefficient + 1)) / 2;
  // console.log("boats:", boatsAmount);

  let gaps = boatsAmount > 0 ? boatsAmount - 1 : 0;
  let spaceAllBoatsTake = 0;

  // spaceAllBoatsTake =  coefficient * (coefficient + 1) * (coefficient + 2) / 6;
  for (let i = 1; i <= coefficient; ++i) {
    let spaceForOneSizeBoats = i * (coefficient - i + 1);
    // console.log("one size", i, " takes:", spaceForOneSizeBoats);

    spaceAllBoatsTake += spaceForOneSizeBoats;
  }
  // console.log("spaceAllBoatsTake:", spaceAllBoatsTake);

  // console.log("total space take: ", spaceAllBoatsTake + gaps);

  return spaceAllBoatsTake + gaps;
}

function countBoatsAmount(cellsAmount) {
  // console.log("start: ", cellsAmount);

  if (cellsAmount < 2) {
    return cellsAmount;
  }

  let left = 1;
  let right =  Math.floor(Math.sqrt(cellsAmount));

  while (left <= right) {
    let suggestedCoef = Math.floor((left + right) / 2);
    // console.log("suggestedCoef", suggestedCoef);

    if (totalSpaceTaken(suggestedCoef) > cellsAmount) {
      right = suggestedCoef - 1;
    } else {
      left = suggestedCoef + 1;
    }
    // console.log(`left: ${left}, right: ${right}`);
  }

  return right;
}

module.exports = { countBoatsAmount, totalSpaceTaken };
