const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split(" ");
  // console.log(result);

  return result.map(Number);
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [currentIncome, peopleAmount, daysToCountIncome] = getInput();
  // console.log(currentIncome, peopleAmount, daysToCountIncome);

  const result = countMoney(currentIncome, peopleAmount, daysToCountIncome);

  sendOutput(result);
}

/**
 *
 * @param {number} 1 <= currentIncome <= 10**9
 * @param {number} 1 <= peopleAmount <= 10**9
 * @param {number} 1 <= daysToCountIncome <= 10**5
 * @returns {string}
 */
function countMoney(currentIncome, peopleAmount, daysToCountIncome) {
  let income = currentIncome + "";

  for (let digit = 0; digit < 10; ++digit) {
    let nextIncome = income + digit;

    if (nextIncome % peopleAmount === 0) {
      return nextIncome + "0".repeat(daysToCountIncome - 1);
    }
  }

  return "-1";
}

module.exports = { countMoney };
