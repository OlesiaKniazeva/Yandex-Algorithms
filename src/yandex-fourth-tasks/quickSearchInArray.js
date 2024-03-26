const fs = require("node:fs");

program();

function getInput(testData) {
  let fileContent;
  
  if (!testData) {
    fileContent = fs.readFileSync("./input.txt", "utf8").split("\n");
  } else {
    fileContent = testData;
  }

  let array = fileContent[1].split(" ").map((el) => Number(el));
  array.sort((a, b) => a - b);
  // console.log(array);
  

  // console.log(array);

  let uniqueArray = [];
  let cumulativeCountArray = [];

  let count = 0;

  let i;
  cumulativeCountArray.push(0);
  for (i = 1; i < array.length; ++i) {
    ++count;

    if (array[i - 1] !== array[i]) {
      uniqueArray.push(array[i - 1]);
      cumulativeCountArray.push(count);
    }
  }
  ++count;
  uniqueArray.push(array[i - 1]);
  cumulativeCountArray.push(count);

  // console.log(uniqueArray);
  // console.log(cumulativeCountArray);

  let queries = [];
  let queriesAmount = Number(fileContent[2]);
  for (let i = 3; i < queriesAmount + 3; ++i) {
    let data = fileContent[i].split(" ").map((el) => Number(el));
    queries.push(data);
  }
  // console.log(queries);

  return [uniqueArray, cumulativeCountArray, queries];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.join(' '));
}

function program() {
  const [uniqueArray, cumulativeCountArray, queries] = getInput();

  const result = processAllData(uniqueArray, cumulativeCountArray, queries);

  sendOutput(result);
}

function processAllData(uniqueArray, cumulativeCountArray, queries) {
  let result = [];
  for (let data of queries) {
    result.push(searchData(uniqueArray, cumulativeCountArray, data));
  }
  return result;
}

function searchData(uniqueArray, cumulativeCountArray, target) {
  let min = target[0];
  let max = target[1];
  // console.log(min, max);
  

  let left = findFirstMoreEqual(uniqueArray, min);
  let right = findFirstMoreEqual(uniqueArray, max + 1);
  // console.log("left:", left, "right:", right);
  
  return cumulativeCountArray[right] - cumulativeCountArray[left];
}

function findFirstMoreEqual(array, target) {
  let left = 0;
  let right = array.length;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);

    if (array[middle] >= target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  if (array[left] < target) {
    return array.length;
  }
  return left;
}


module.exports = { searchData, getInput };
