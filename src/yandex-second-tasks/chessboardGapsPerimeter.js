const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split("\n");
  let amount = Number(result[0]);

  const board = Array.from({ length: 10 }, () => Array(10).fill(0));

  let coordinates = [];
  for (let i = 0; i < amount; ++i) {
    let [x, y] = result[i + 1].split(" ").map((el) => Number(el));
    board[x][y] = "*";
    coordinates.push([x, y]);
  }

  return [board, coordinates];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [board, coordinates] = getInput();

  const result = findPerimeter(board, coordinates);

  sendOutput(result);
}

function findPerimeter(board, coordinates) {

  console.log(board);
  console.log(coordinates);
  
  
  const shiftWidth = [0, +1, 0, -1];
  const shiftHeight = [-1, 0, +1, 0];

  let perimeter = 0;

  for (let [x, y] of coordinates) {
    for (let i = 0; i < 4; i++) {
      if (board[x + shiftWidth[i]][y + shiftHeight[i]] !== "*") {
        perimeter++;
      }
    }
  }
  return perimeter;
}

module.exports = { findPerimeter };
