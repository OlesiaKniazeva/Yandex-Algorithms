const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  let result = fileContent.toString().split("\n");

  let sectors = result[1]
    .split(" ")
    .map((el, index) => ({ size: Number(el), index }));
  let [minSpeed, maxSpeed, speedDecrease] = result[2]
    .split(" ")
    .map((el) => Number(el));

  sectors.sort((a, b) => b.size - a.size);

  return [result[0], sectors, minSpeed, maxSpeed, speedDecrease];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease] =
    getInput();

  const result = findMaxWin(
    sectorsAmount,
    sectors,
    minSpeed,
    maxSpeed,
    speedDecrease
  );

  sendOutput(result);
}

function findMaxWin(sectorsAmount, sectors, minSpeed, maxSpeed, speedDecrease) {
  console.log(sectors);

  let minSectorsToCover = findSectorsToCover(minSpeed, speedDecrease);
  let maxSectorsToCover = findSectorsToCover(maxSpeed, speedDecrease);

  let idxMinSector = minSectorsToCover % sectorsAmount;
  let idxMaxSector = maxSectorsToCover % sectorsAmount;

  console.log(minSectorsToCover);
  console.log(maxSectorsToCover);
  console.log("min:", idxMinSector);
  console.log("max:", idxMaxSector);
  console.log("sectors: ", sectorsAmount);

  if (maxSectorsToCover - minSectorsToCover >= sectorsAmount) {
    console.log("more that 1 round");

    return sectors[0].size;
  }

  for (let sector of sectors) {
    if (idxMaxSector >= idxMinSector) {
      if (idxMinSector <= sector.index && idxMaxSector >= sector.index) {
        return sector.size;
      } else if (
        sectorsAmount - idxMaxSector <= sector.index &&
        sectorsAmount - idxMinSector >= sector.index
      ) {
        return sector.size;
      }
    } else if (idxMaxSector === 0) {
      if (
        idxMinSector * 2 > sectorsAmount &&
        sector.index >= idxMinSector &&
        sector.index <= sectorsAmount
      ) {
        return sector.size;
      } else if (idxMinSector * 2 < sectorsAmount && sector.index >= 0 && sector.index <= idxMinSector) {
        return sector.size;
      }
    } else {
      if (
        (sector.index >= 0 && sector.index <= idxMaxSector) ||
        (sector.index < sectorsAmount && sector.index >= idxMinSector)
      ) {
        return sector.size;
      } else if (
        (idxMaxSector !== 0 &&
          sector.index >= sectorsAmount - idxMaxSector &&
          sector.index <= sectorsAmount) ||
        (sector.index >= 0 && sector.index <= sectorsAmount - idxMinSector)
      ) {
        return sector.size;
      }
    }
  }
}

function findSectorsToCover(speed, speedDecrease) {
  let sectorsToCover;

  if (speed % speedDecrease === 0) {
    sectorsToCover = speed / speedDecrease - 1;
  } else {
    sectorsToCover = Math.floor(speed / speedDecrease);
  }
  // console.log(sectorsToCover);

  return sectorsToCover;
}

module.exports = { findMaxWin };
