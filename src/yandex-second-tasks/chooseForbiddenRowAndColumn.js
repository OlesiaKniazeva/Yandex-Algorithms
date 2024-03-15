const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  let result = fileContent.toString().split("\n");

  const [rows, columns] = result[0].split(" ").map((el) => Number(el));

  let data = [];

  for (let row = 1; row <= rows; ++row) {
    let scores = result[row].split(" ").map((el) => Number(el));
    // console.log(scores);

    for (let column = 1; column <= columns; column++) {
      data.push({
        coordinate: [row, column],
        size: scores[column - 1],
      });
    }
  }

  data.sort((a, b) => b.size - a.size);
  // console.log(data);

  let maxItems = data
    .filter((item) => item.size === data[0].size)
    .map((item) => item.coordinate);

  // console.log(maxItems);
  // console.log(otherItems);

  return [maxItems, data];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.join(' ').toString());
}

function program() {
  const [maxItems, data] = getInput();

  const result = chooseRowAndColumn(maxItems, data);

  sendOutput(result);
}

function chooseRowAndColumn(maxItems, data) {
  // console.log(maxItems);
  // console.log(data);
  
  let bestOption = [-1, -1];
  let currentAmount = 0;

  for (let i = 0; i < maxItems.length; ++i) {
    let [option, amount] = checkBestOption(maxItems[i][0], maxItems[i][1], i, data);
    if (amount > currentAmount) {
      bestOption = option;
    }
  }

  return bestOption;
}

function checkBestOption(row, column, maxIndex, data) {
  let firstAmount = 0;
  let secondAmount = 0;
  let firstOption = [row, -1];
  let secondOption = [-1, column];
  let firstFinished = false;
  let secondFinished = false;

  for (let i = 0; i < data.length; ++i) {
    if (i === maxIndex) {
      continue;
    }

    if (firstOption[1] === -1) {
      firstAmount++;
      if (data[i].coordinate[0] !== firstOption[0]) {
        firstOption[1] = data[i].coordinate[1];
      }
    } else if (
      data[i].coordinate[0] === firstOption[0] ||
      data[i].coordinate[1] === firstOption[1]
    ) {
      firstAmount++;
    } else {
      firstFinished = true;
    }

    if (secondOption[0] === -1) {
      secondAmount++;
      if (data[i].coordinate[1] !== secondOption[1]) {
        secondOption[0] = data[i].coordinate[0];
      }
    } else if (
      data[i].coordinate[0] === secondOption[0] ||
      data[i].coordinate[1] === secondOption[1]
    ) {
      secondAmount++;
    } else {
      secondFinished = true;
    }

    if (firstFinished || secondFinished) {
      break;
    }
  }

  return firstAmount > secondAmount ? [firstOption, firstAmount] : [secondOption, secondAmount];
}

module.exports = { chooseRowAndColumn };
