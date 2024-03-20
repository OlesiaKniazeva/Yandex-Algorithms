const fs = require("node:fs");

program();

/**
 *
 * 1 <= rows <= 200
 * 1 <= rowLength <= 200
 */
function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split("\n");
  let [rows, columns] = result[0].split(" ").map((el) => Number(el));
  // console.log(rows, columns);
  const board = Array.from({ length: rows + 2 }, () =>
    Array(columns + 2).fill(0)
  );
  // console.log(board);

  let filledCoordinates = [];

  for (let i = 1; i < result.length; ++i) {
    let rowData = result[i];
    // console.log(rowData);

    for (let j = 0; j < rowData.length; ++j) {
      board[i][j + 1] = rowData[j];
      if (board[i][j + 1] === "#") {
        filledCoordinates.push([i, j + 1]);
      }
    }
  }

  // console.log(board, columns, rows, filledCoordinates);

  return [board, filledCoordinates, rows, columns];
}

function sendOutput(result) {
  console.log(result);

  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [board, filledCoordinates, rows, columns] = getInput();

  const result = findDisjoinedRectangles(
    board,
    filledCoordinates,
    rows,
    columns
  );

  sendOutput(result);
}

function findDisjoinedRectangles(board, filledCoordinates, rows, columns) {
  // console.log(board);

  console.log(filledCoordinates);

  // let rowShift = [-1, 0, +1, -1, +1, -1, 0, +1];
  // let columnShift = [-1, -1, +1, 0, 0, +1, +1, +1];

  let haveB = false;

  board[filledCoordinates[0][0]][filledCoordinates[0][1]] = "a";

  if (filledCoordinates.length < 2) {
    return "NO";
  }

  for (let [x, y] of filledCoordinates) {
    if (board[x][y] === '#') {
      if 
    }

    for (let n = 0; n < 4; ++n) {
      if (isDirectShiftEmpty(board, x, y, n)) {
        if (isLeftDiagonalFilled(board, x, y, n)) {
          if (!haveB) {
            setLeftBData(board, x, y, n);
            haveB = true;
          } else {
            return "NO";
          }
        }

        if (isRightDiagonalFilled(board, x, y, n)) {
          if (!haveB) {
            setRightBData(board, x, y, n);
            haveB = true;
          } else {
            return "NO";
          }
        }
      }
    }
  }

  // for (let j = 1; j <= height; ++j) {
  //   for (let i = 1; i <= width; ++i) {
  // console.log(board[j][i]);

  // if (board[j][i] === "#" && !haveA) {
  //   board[j][i] = "a";
  //   haveA = true;
  // }
  // for (let n = 0; n < 4; ++n) {
  // console.log(board[j + dShiftHeight[n]][j + dShiftWidth[n]]);
  // console.log(board[j + dShiftHeight[(n + 1) % 4]][j + dShiftWidth[(n + 1) % 4]]);
  // }

  // console.log(board[j + shiftHeight[n]][i + shiftWidth[n]]);

  // if (board[j + shiftColumn[n]][i + shiftRow[n]] === '.') {
  //   if ((board[j + (dShiftRow[n % 3])] === '#') && !haveB) {
  //     board[j + (dShiftRow[n % 3])] = 'b';
  //     haveB = true;
  //   } else {
  //     console.log(printBoard(board, width, height));

  //     return 'NO';
  //   }

  //   if ((board[j + (dShiftRow[(n + 1) % 4])] === '#') && !haveB) {
  //     board[j + (dShiftRow[(n + 1) % 4])] = 'b';
  //     haveB = true;
  //   } else {
  //     console.log(printBoard(board, width, height));

  //     return 'NO';
  //   }

  // }
  //     }
  //   }
  // }

  console.log("here");

  printBoard(board, rows, columns);

  if (!haveB) {
    return "NO";
  }

  return ["YES", board];
}

function isDirectShiftEmpty(board, x, y, n) {
  let shiftX = [-1, 0, +1, 0];
  let shiftY = [0, +1, 0, -1];
  // console.log(x, y);
  // console.log("direct-coord", x + shiftX[n], y + shiftY[n]);

  // console.log("data-inside", board[x + shiftX[n]][[y + shiftY[n]]]);

  return board[x + shiftX[n]][y + shiftY[n]] === ".";
}

function isLeftDiagonalFilled(board, x, y, n) {
  let dShiftX = [-1, -1, +1, +1];
  let dShiftY = [-1, +1, +1, -1];

  // console.log('diagonal-data',board[x + dShiftX[n]][y + dShiftY[n]]);
  return board[x + dShiftX[n]][y + dShiftY[n]] === "#";
}

function setLeftBData(board, x, y, n) {
  let dShiftX = [-1, -1, +1, +1];
  let dShiftY = [-1, +1, +1, -1];

  board[x + dShiftX[n]][y + dShiftY[n]] = "b";
}

function isRightDiagonalFilled(board, x, y, n) {
  let dShiftX = [-1, +1, +1, -1];
  let dShiftY = [+1, +1, -1, -1];
  // console.log('diagonal-data',board[x + dShiftX[n]][y + dShiftY[n]]);
  return board[x + dShiftX[n]][y + dShiftY[n]] === "#";
}

function setRightBData(board, x, y, n) {
  let dShiftX = [-1, +1, +1, -1];
  let dShiftY = [+1, +1, -1, -1];
  // console.log('diagonal-data',board[x + dShiftX[n]][y + dShiftY[n]]);
  board[x + dShiftX[n]][y + dShiftY[n]] = "b";
}

function printBoard(board, rows, columns) {
  for (let j = 1; j <= rows; ++j) {
    let line = [];
    for (let i = 1; i <= columns; ++i) {
      line.push(board[j][i]);
    }
    console.log(line);
  }
}

module.exports = { findDisjoinedRectangles };
