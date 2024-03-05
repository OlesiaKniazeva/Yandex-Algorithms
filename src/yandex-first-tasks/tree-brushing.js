const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split("\n");

  return [result[0].split(" ").map(Number), result[1].split(" ").map(Number)];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  let [firstData, secondData] = getInput();

  let result = countTreesAmount(firstData, secondData);

  sendOutput(result);
}

/**
 *
 * @param {[number, number]} First person tree index and distance
 * @param {[number, number]} Second person tree index and distance
 * @returns number
 */
function countTreesAmount([index1, distance1] = [], [index2, distance2] = []) {

  let coordinateA = [index1 - distance1, index1 + distance1];
  let coordinateB = [index2 - distance2, index2 + distance2];

  if (overlap(coordinateA, coordinateB)) {
    let result = mergeCoordinates(coordinateA, coordinateB);

    return result[1] - result[0] + 1;
  }
  return (coordinateA[1] - coordinateA[0]) + 1 + (coordinateB[1] - coordinateB[0]) + 1;
}

function overlap(coordinateA, coordinateB) {
  return coordinateA[1] >= coordinateB[0] && coordinateA[0] <= coordinateB[1];
}

function mergeCoordinates(coordinateA, coordinateB) {
  return [
    Math.min(coordinateA[0], coordinateB[0]),
    Math.max(coordinateA[1], coordinateB[1]),
  ];
}

module.exports = { countTreesAmount, overlap, mergeCoordinates };
