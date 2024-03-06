const fs = require("node:fs");

program();

/**
 * R — rook — ладья — horisontal, vertical lines
 * B — bishop — слон — dioganals
 * chess board size 8 * 8
 */

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split("\n");

  const rooks = [];
  const bishops = [];
  const board = Array(8)
    .fill(0)
    .map(() => Array(8).fill(0));

  result.forEach((line, idx) => {
    for (let i = 0; i < 8; ++i) {
      if (line[i] === "R") {
        rooks.push([i, idx]);
        board[idx][i] = 2;
      }
      if (line[i] === "B") {
        bishops.push([i, idx]);
        board[idx][i] = 2;
      }
    }
  });

  return [rooks, bishops, board];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [rooks, bishops, board] = getInput();

  const result = countFreeBoardSquares(rooks, bishops, board);

  sendOutput(result);
}

/**
 *
 * @param {Array<Array<number>>} rooks
 * @param {Array<Array<number>>} bishops
 * @param {Array<Array<boolean>>} board
 * @returns {number}
 */
function countFreeBoardSquares(rooks, bishops, board) {
  for (let rook of rooks) {
    let curX = rook[0];
    let curY = rook[1];

    move(curX, curY, board, ["up"]);
    move(curX, curY, board, ["down"]);
    move(curX, curY, board, ["right"]);
    move(curX, curY, board, ["left"]);
  }

  for (let bishop of bishops) {
    let curX = bishop[0];
    let curY = bishop[1];

    move(curX, curY, board, ["up", "left"]);
    move(curX, curY, board, ["up", "right"]);
    move(curX, curY, board, ["down", "right"]);
    move(curX, curY, board, ["down", "left"]);
  }

  let freeSquares = board.reduce((total, line) => {
    return (
      total +
      line.reduce((count, square) => (square === 0 ? count + 1 : count), 0)
    );
  }, 0);

  return freeSquares;
}

function move(curX, curY, board, moveTypes) {
  moveTypes.forEach((moveType) => {
    if (moveType === "up") {
      --curY;
    } else if (moveType === "down") {
      ++curY;
    } else if (moveType === "right") {
      ++curX;
    } else if (moveType === "left") {
      --curX;
    }
  });

  if (curX < 0 || curY < 0 || curX > 7 || curY > 7 || board[curY][curX] === 2) {
    return;
  }
  board[curY][curX] = 1;
  return move(curX, curY, board, moveTypes);
}

module.exports = { countFreeBoardSquares };
