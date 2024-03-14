const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  let result = fileContent.toString().split("\n");

  let [daysToSell, validityDays] = result[0].split(' ').map(el => Number(el));
  let priceList = result[1].split(' ').map(el => Number(el));

return [daysToSell, validityDays, priceList];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [daysToSell, validityRange, priceList] = getInput();

  const result = findIncomeFromSell(daysToSell, validityRange, priceList);

  sendOutput(result);
}

/**
 * @param {number} 1 <= daysToSell <= 10_000
 * @param {number} 2 <= validityDays <= 101
 * @param {number[]} 1 <= priceList <= 10**9
 */
function findIncomeFromSell(daysToSell, validityRange, priceList) {
  if (validityRange + 1 >= daysToSell) {
    let range = findMinAndMaxIncreasing(priceList, 0, priceList.length);
    return (range > 0) ? range : 0;
  }
  let income = 0;
  let ranges = daysToSell - validityRange;

  for (let i = 0; i <= ranges; ++i) {
    let currentRange = findMinAndMaxIncreasing(priceList, i, i + validityRange + 1);
    if (currentRange > income) {
      income = currentRange;
    }
  }
  return income;
  
}

function findMinAndMaxIncreasing(array, idx1, idx2) {
  let min = array[idx1];
  let max = -1;
  let secondMin = -1;

  for (let i = idx1 + 1; i < idx2; ++i) {
    if (array[i] < min && max === -1) {
      min = array[i]
    } else if (array[i] < min && max !== -1) {
      secondMin = array[i]
    } else if (array[i] > min && max === -1) {
      max = array[i];
    } else if (max !== -1 && array[i] >= max ) {
      if (secondMin !== -1) {
        min = secondMin;
        max = array[i];
        secondMin = -1;
      } else {
        max = array[i];
      }
    }
  }
  return max - min;
}


module.exports = { findIncomeFromSell, findMinAndMaxIncreasing };
