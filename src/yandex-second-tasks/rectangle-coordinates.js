const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  let result = fileContent.toString().split("\n");

  let amount = result.shift();

  let xData = [];
  let yData = [];

  for (let i = 0; i < amount; ++i) {
    let data = result[i].split(" ");
    xData.push(Number(data[0]));
    yData.push(Number(data[1]));
  }

  return [xData, yData];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.join(" ").toString());
}

function program() {
  const [xData, yData] = getInput();

  const result = findCoordinates(xData, yData);

  sendOutput(result);
}

function findCoordinates(xCoordinates, yCoordinates) {
  if (xCoordinates.length === 1) {
    return [xCoordinates[0], yCoordinates[0], xCoordinates[0], yCoordinates[0]];
  }

  let xRange = findMinAndMax(xCoordinates);
  let yRange = findMinAndMax(yCoordinates);

  return [xRange[0], yRange[0], xRange[1], yRange[1]];
}

function findMinAndMax(array) {
  let min = array[0] > array[1] ? array[1] : array[0];
  let max = array[0] > array[1] ? array[0] : array[1];

  array.forEach((element) => {
    max = element > max ? element : max;
    min = element < min ? element : min;
  });
  return [min, max];
}

module.exports = { findCoordinates };
