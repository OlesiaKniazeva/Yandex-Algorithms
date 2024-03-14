const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  let result = fileContent.toString().split("\n");

  let ropesLengths = result[1].split(' ').map(el => Number(el));

return [result[0], ropesLengths];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [ropesAmount, ropesLengths] = getInput();

  const result = findShortestRope(ropesAmount, ropesLengths);

  sendOutput(result);
}


/**
 * 
 * @param {number} 2 <= ropesAmount <= 1000
 * @param {number[]} 1 <= ropesLengths <= 1000 
 * @returns {number}
 */
function findShortestRope(ropesAmount, ropesLengths) {
  let sum = 0;
  let max = ropesLengths[0];

  for (let i = 0; i < ropesAmount; ++i) {
    sum += ropesLengths[i];
    if (max < ropesLengths[i]) {
      max = ropesLengths[i];
    }
  }

  if (sum - max < max) {
    return max - (sum - max);
  } else {
    return sum;
  }

}

module.exports = {findShortestRope};
