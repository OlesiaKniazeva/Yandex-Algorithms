const fs = require("node:fs");

 let logStream = fs.createWriteStream("console.log");
 let originalConsoleLog = console.log;

 console.log = function () {
   let message = Array.from(arguments).join(" ");
   fs.appendFileSync("console.log", message + "\n");
   originalConsoleLog.apply(console, arguments);
 };

program();

function findBestColumn(coordinates, side) {
  let distanceSums = new Array(side).fill(0);
  let onesCounts = Array(side).fill(0);

  for (let [_, y] of coordinates) {
    for (let i = 0; i < side; ++i) {
      distanceSums[i] += Math.abs(y - (i + 1));
      if (y === i + 1) {
        ++onesCounts[i];
      }
    }
  }

  let minDistance = Infinity;
  let column = -1;
  let maxOnes = -1;

   console.log(distanceSums);
   console.log(maxOnes);

  for (let i = 0; i < side; ++i) {
    if (
      distanceSums[i] < minDistance ||
      (distanceSums[i] === minDistance && onesCounts[i] > maxOnes)
    ) {
      minDistance = distanceSums[i];
      column = i + 1;
      maxOnes = onesCounts[i];
    }
  }

  return column;
}

function createBoard(size) {
  let boardSize = size + 2;
  let board = Array(boardSize)
    .fill()
    .map((_, i) =>
      Array(boardSize)
        .fill()
        .map((_, j) =>
          i === 0 || i === boardSize - 1 || j === 0 || j === boardSize - 1
            ? 2
            : 0
        )
    );
  return board;
}

/**
 *
 * N (1 ≤ N ≤ 100)
 */
function getInput(useTestInput = false, testInput = false) {
  let result;

  if (!useTestInput) {
    let fileContent = fs.readFileSync("./input.txt", "utf8");
    result = fileContent.toString().split("\n");
  } else {
    result = testInput;
  }

  let side = Number(result[0]);
   console.log(side);

  const board = createBoard(side);

  //  printBoard(side, board);

  let coordinates = [];

  for (let i = 1; i <= side; ++i) {
    let [x, y] = result[i].split(" ").map((el) => Number(el));
    board[x][y] = 1;
    coordinates.push([x, y]);
  }

  let middleColumn = findBestColumn(coordinates, side);
  coordinates.sort((a, b) => {
    let diff = Math.abs(a[1] - middleColumn) - Math.abs(b[1] - middleColumn);
    if (diff === 0) {
      return a[0] - b[0];
    } else {
      return diff;
    }
  });
   console.log("data before");

   console.log("middle data:", middleColumn);
   console.log(coordinates);
  //  printBoard(side, board);

  return [side, board, middleColumn, coordinates];
}

function sendOutput(result) {
   console.log(result);

  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  let [sideSize, board, middleColumn, coordinates] = getInput();

  const result = countStepsToFillColumn(
    sideSize,
    board,
    middleColumn,
    coordinates
  );

  sendOutput(result);
}

function countStepsToFillColumn(sideSize, board, middleColumn, coordinates) {
  let steps = 0;

  if (sideSize === 1) {
    return steps;
  }

  //  console.log("move to the nearest point");

  let unfinishedCoordinates = [];

  for (let i = 0; i < coordinates.length; ++i) {
    let x = coordinates[i][0];
    let y = coordinates[i][1];
    //  console.log("start new coordinate: ", x, y);
    //  console.log("steps", steps);

    let onPlace = false;

    if (y === middleColumn) {
      continue;
    }

    if (onLeftSide(y, middleColumn)) {
      //  console.log("data-left-side", x, y);

      while (canGoRight(board, x, y)) {
        //  console.log("go right");

        makeStep(board, x, y, "right");
        //  printBoard(sideSize, board);
        ++y;
        ++steps;

        if (y === middleColumn) {
          onPlace = true;
          break;
        }
      }

      if (!onPlace) {
        unfinishedCoordinates.push([x, y]);
      }
    } else if (onRightSide(y, middleColumn)) {
      //  console.log("data-right-side", x, y);

      while (canGoLeft(board, x, y)) {
        makeStep(board, x, y, "left");
        //  printBoard(sideSize, board);
        --y;
        ++steps;

        if (y === middleColumn) {
          onPlace = true;
          break;
        }
      }

      if (!onPlace) {
        unfinishedCoordinates.push([x, y]);
      }
    }
  }

  unfinishedCoordinates.sort((a, b) => {
    let diff = a[0] - b[0];
    if (diff === 0) {
      return Math.abs(a[1] - middleColumn) - Math.abs(b[1] - middleColumn);
    } else {
      return diff;
    }
  });

   console.log("yet to find place", unfinishedCoordinates);

   console.log("find home");

  for (let i = 0; i < unfinishedCoordinates.length; ++i) {
    let x = unfinishedCoordinates[i][0];
    let y = unfinishedCoordinates[i][1];
     console.log("start new coordinate: ", x, y);
     console.log("steps", steps);
     printBoard(sideSize, board);
     

    if (y === middleColumn) {
      continue;
    }

    let isOnPlace = false;

    if (onLeftSide(y, middleColumn)) {
       console.log("data-left-side", x, y);

      while (canGoRight(board, x, y)) {
         console.log("go right");

        makeStep(board, x, y, "right");
        //  printBoard(sideSize, board);
        ++y;
        ++steps;

        if (y === middleColumn) {
          isOnPlace = true;
          break;
        }
      }

      if (isOnPlace) {
         console.log("on place after go right");

        continue;
      }

      let index = indexFreeSpaceUp(board, x, middleColumn);

      if (index > 0) {
         console.log("can go up! - from left side");
        steps += x - index + 1;
        moveChess(board, x, y, index, middleColumn);
      } else if (canGoDown(board, x, y)) {
         console.log("can go down!");

        let findPlace = false;

        while (canGoDown(board, x, y)) {
          let index = indexFreeSpaceDown(board, x, middleColumn, sideSize);
           console.log("where free space: ", index);

          if (index === -1) {
            throw Error("Wrong Solution");
          }
          makeStep(board, x, y, "down");
          //  printBoard(sideSize, board);
          ++x;
          ++steps;

          if (x === index) {
            ++steps;
            findPlace = true;
            makeStep(board, x, y, "right");
            //  printBoard(sideSize, board);
            break;
          }
        }

        if (!findPlace) {
          moveStackedCoordinate(board, x, y, sideSize, unfinishedCoordinates, i);
          console.log("data after out", unfinishedCoordinates);
        }
      } else {
         console.log("Can't move now - left side");
        moveStackedCoordinate(board, x, y, sideSize, unfinishedCoordinates, i);
        console.log("data after out", unfinishedCoordinates);
      }
    } else if (onRightSide(y, middleColumn)) {
       console.log("data-right-side", x, y);

      while (canGoLeft(board, x, y)) {
        makeStep(board, x, y, "left");
        //  printBoard(sideSize, board);
        --y;
        ++steps;

        if (y === middleColumn) {
          isOnPlace = true;
          break;
        }
      }

      if (isOnPlace) {
         console.log("on place after go left");
        continue;
      }

      let index = indexFreeSpaceUp(board, x, middleColumn);

      if (index > 0) {
         console.log("can go up! - from right side");
        steps += x - index + 1;
        moveChess(board, x, y, index, middleColumn);
        //  printBoard(sideSize, board);
      } else if (canGoDown(board, x, y)) {
        let findPlace = false;

        while (canGoDown(board, x, y)) {
           console.log("can go down!");

          let index = indexFreeSpaceDown(board, x, middleColumn, sideSize);
          if (index === -1) {
            throw Error("Wrong Solution");
          }
          makeStep(board, x, y, "down");
          //  printBoard(sideSize, board);
          ++x;
          ++steps;

          if (x === index) {
            ++steps;
            findPlace = true;
            makeStep(board, x, y, "left");
            //  printBoard(sideSize, board);
            break;
          }
        }

        if (!findPlace) {
          moveStackedCoordinate(board, x, y, sideSize, unfinishedCoordinates, i);
          console.log("data after out", unfinishedCoordinates);
        }
      } else {
         console.log("Can't move now rigth side");

        moveStackedCoordinate(board, x, y, sideSize, unfinishedCoordinates, i);
        console.log("data after out", unfinishedCoordinates);
      }
    }
  }

   console.log("data after");
  //  printBoard(sideSize, board);

   console.log("steps: ", steps);

  return steps;
}

function moveStackedCoordinate(board, x, y, size, coordinates, currentIndex) {
  let index;
  // console.log(board);
  console.log("x", x);
  console.log("y", y);
  console.log(size);
  console.log("data before splice", coordinates);
  console.log(currentIndex);
  
  
  
  
  
  let stackedCoordinates = [];
  for (let coord = x + 1; coord < size; ++coord) {
    console.log(")))) ", board[coord][y]);
    console.log(coord, y);
    
    console.log();
    if (board[coord][y] === 1) {
      stackedCoordinates.push([coord, y]);
    }
    
    
    if (board[coord][y] === 0) {
      let lastHyndrance = [coord - 1, y];
      console.log("lats", lastHyndrance);
      
      for (let i = currentIndex; i < coordinates.length; i++) {
        if (
          coordinates[i][0] === lastHyndrance[0] &&
          coordinates[i][1] === lastHyndrance[1]
        ) {
          index = i;
          console.log("StackData", stackedCoordinates);
          
          for (let n = index + 1; n < coordinates.length; ++n) {
            if (stackedCoordinates.length > 0 && stackedCoordinates.some(coord => coord[0] === coordinates[n][0] && coord[1] === coordinates[n][1])) {
              console.log("Find one more hyndrance!, increase index!");
              
              index++;
            }
          }
        }
      }
      if (!index) {
        throw Error("Logic is wrong. Didn't find a hyndrance");
      } else {
        coordinates.splice(index + 1, 0, [x, y]);
        console.log("data after splice", coordinates);
        
        return;
      }
    }
  }

  throw Error("Didn't found hindrance, logic error");
}

function moveChess(board, prevX, prevY, newX, newY) {
  board[newX][newY] = 1;
  board[prevX][prevY] = 0;
}

function indexFreeSpaceUp(board, x, middleColumn) {
  for (let i = 1; i < x; ++i) {
    if (board[i][middleColumn] === 0) {
      return i;
    }
  }
  return -1;
}

function indexFreeSpaceDown(board, x, middleColumn, sideSize) {
  for (let i = x; i <= sideSize; ++i) {
    if (board[i][middleColumn] === 0) {
      return i;
    }
  }
  return -1;
}

function makeStep(board, x, y, side) {
  if (side === "left") {
    board[x][y - 1] = 1;
  } else if (side === "right") {
    board[x][y + 1] = 1;
  } else if (side === "down") {
    board[x + 1][y] = 1;
  }
  board[x][y] = 0;

   console.log("update board");
}

function canGoLeft(board, x, y) {
  return board[x][y - 1] === 0;
}

function canGoRight(board, x, y) {
  return board[x][y + 1] === 0;
}

function canGoUp(board, x, y) {
  return board[x - 1][y] === 0;
}

function canGoDown(board, x, y) {
  return board[x + 1][y] === 0;
}

function onLeftSide(column, middleColumn) {
  return column < middleColumn;
}

function onRightSide(column, middleColumn) {
  return !onLeftSide(column, middleColumn);
}

function printBoard(side, board) {
  let line = "";
  for (let i = 0; i < side + 2; ++i) {
    line += board[i].join(" ");
    line += "\n";
  }
  console.log(line);
}

module.exports = { countStepsToFillColumn, getInput };
