const fs = require("node:fs");

program();

function getInput() {
  const fileContent = fs.readFileSync("input.txt", "utf8");

  const result = fileContent.split("\n");

  let [numbersAmount, distance] = result[0].split(" ").map((el) => Number(el));

  let numbers = result[1].split(" ").map((el) => Number(el));

  return [distance, numbers];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  let [distance, numbers] = getInput();

  let result = checkDistances(distance, numbers);

  sendOutput(result);
}

function checkDistances(distance, numbers) {
  let foundIdxes = {};

  for (let index = 0; index < numbers.length; ++index) {
    let number = numbers[index];

    let prevIdx = foundIdxes[number];

    if (prevIdx !== undefined) {
      if (index - prevIdx <= distance) {
        return "YES";
      }
    }
    foundIdxes[number] = index;
  }

  return "NO";
}

module.exports = { checkDistances };
