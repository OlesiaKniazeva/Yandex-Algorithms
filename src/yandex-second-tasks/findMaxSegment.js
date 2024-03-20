const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");
  let result = fileContent.toString().split("\n");

  let testsAmount = Number(result[0]);

  let testData = [];
  for (let i = 0; i < testsAmount; ++i) {
    let dataSet = result[i * 2 + 2].split(" ").map((el) => Number(el));
    testData.push(dataSet);
  }

  return testData;
}

function sendOutput(result) {
  let string = '';
  for (let i = 0; i < result.length; ++i) {
    let strLengths = result[i][1].join(' ');
    string += result[i][0] + '\n' + strLengths;
    if (i !== result.length - 1) {
      string += '\n';
    }
  }
  fs.writeFileSync("output.txt", string);
}

function program() {
  let testData = getInput();

  let result = processTestData(testData);
  console.log(result);
  

  sendOutput(result);  
}

function processTestData(testData) {
  let allResults = [];

  for (let data of testData) {
    let result = findSegments(data);

    allResults.push(result);
  }

  return allResults;
}

function findSegments(data) {
  let minData;
  let segmentsAmount = 0;
  let segmentsLengths = [];

  let currentSegmentLength = 1;
  minData = data[0];

  for (let i = 1; i < data.length; ++i) {
    if (minData <= currentSegmentLength || data[i] < currentSegmentLength + 1) {
      segmentsAmount++;
      segmentsLengths.push(currentSegmentLength);

      minData = data[i];
      currentSegmentLength = 1;
      continue;
    }

    if (minData > data[i]) {
      minData = data[i];
    }
    currentSegmentLength++;
  }
  segmentsAmount++;
  segmentsLengths.push(currentSegmentLength);

  return [segmentsAmount, segmentsLengths];
}

module.exports = { findSegments, processTestData };
