const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  let result = fileContent.toString().split("\n");

  let sectors = result[1].split(" ").map((el) => Number(el));
  let [minSpeed, maxSpeed, speedDecrease] = result[2]
    .split(" ")
    .map((el) => Number(el));

  return [sectors, minSpeed, maxSpeed, speedDecrease];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [sectors, minSpeed, maxSpeed, speedDecrease] = getInput();

  const result = findMaxWin(sectors, minSpeed, maxSpeed, speedDecrease);

  sendOutput(result);
}

function findMaxWin(sectors, minSpeed, maxSpeed, speedDecrease) {
  let maxWin = -1;

  let minSectorsToCover = findSectorsToCover(minSpeed, speedDecrease);
  let maxSectorsToCover = findSectorsToCover(maxSpeed, speedDecrease);
  console.log(minSectorsToCover);
  console.log(maxSectorsToCover);
  

  for (let i = minSectorsToCover; i <= maxSectorsToCover; i++) {
    let rightSpinWin = sectors[i % sectors.length];
    let leftSpinWin =
      sectors[sectors.length - (i % sectors.length)];

    maxWin = maxWin < rightSpinWin ? rightSpinWin : maxWin;
    maxWin = maxWin < leftSpinWin ? leftSpinWin : maxWin;
  }

  return maxWin;
}

function calculateMaxWins(sectors) {
  let maxWins = new Array(sectors.length);
  let maxWin = -1;

  for (let i = 0; i < sectors.length; i++) {
    maxWin = Math.max(maxWin, sectors[i]);
    maxWins[i] = maxWin;
  }

  return maxWins;
}

function findSectorsToCover(i, speedDecrease) {
  let sectorsToCover;

  if (i % speedDecrease === 0) {
    sectorsToCover = i / speedDecrease - 1;
  } else {
    sectorsToCover = Math.floor(i / speedDecrease);
  }
  return sectorsToCover;
}

module.exports = { findMaxWin };
