const fs = require("node:fs");

program();

function getInput() {
  const fileContent = fs.readFileSync("input.txt", "utf8");

  const result = fileContent.split("\n");

  return [result[1].split(' ').map(el => Number(el)), result[3].split(' ').map(el => Number(el)), result[5].split(' ').map(el => Number(el))];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.join(" "));
}

function program() {
  let [firstArray, secondArray, thirdArray] = getInput();

  let result = findRepeated(firstArray, secondArray, thirdArray);

  sendOutput(result);
}

function findRepeated(firstArray, secondArray, thirdArray) {
  let set1 = new Set(firstArray);
  let set2 = new Set(secondArray);
  let set3 = new Set(thirdArray);

  let intersection1 = [...set1].filter(x => set2.has(x));
  let intersection2 = [...set1].filter(x => set3.has(x));
  let intersection3 = [...set2].filter(x => set3.has(x));
  
  let resultSet = new Set([...intersection1, ...intersection2, ...intersection3]);  
  let resultData = Array.from(resultSet).sort((a, b) => a - b);
  
  return resultData;

}

module.exports = {findRepeated};