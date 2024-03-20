const fs = require("node:fs");

//  let logStream = fs.createWriteStream("console.log");
//  let originalConsoleLog = console.log;

//  console.log = function () {
//    let message = Array.from(arguments).join(" ");
//    fs.appendFileSync("console.log", message + "\n");
//    originalConsoleLog.apply(console, arguments);
//  };

program();

function findBestColumn(coordinates, sideSize) {
  let distanceSums = new Array(sideSize).fill(0);
  let onesCounts = Array(sideSize).fill(0);

  for (let [_, y] of coordinates) {
    for (let i = 0; i < sideSize; ++i) {
      distanceSums[i] += Math.abs(y - (i + 1));
      if (y === i + 1) {
        ++onesCounts[i];
      }
    }
  }

  let minDistance = Infinity;
  let column = -1;
  let maxOnes = -1;

  //  console.log(distanceSums);
  //  console.log(maxOnes);

  for (let i = 0; i < sideSize; ++i) {
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

function sortFromNearToFurther(array, middleColumn) {
  return array.sort((a, b) => {
    let diff = Math.abs(a[1] - middleColumn) - Math.abs(b[1] - middleColumn);
    if (diff === 0) {
      return a[0] - b[0];
    } else {
      return diff;
    }
  });
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

  let sideSize = Number(result[0]);
  //  console.log(sideSize);

  const board = createBoard(sideSize);

    // printBoard(sideSize, board);

  let coordinatesLeft = [];
  let coordinatesRight = [];
  let coordinates = [];

  for (let i = 1; i <= sideSize; ++i) {
    let [x, y] = result[i].split(" ").map((el) => Number(el));
    board[x][y] = 1;
    coordinates.push([x, y]);
  }

  let middleColumn = findBestColumn(coordinates, sideSize);

  for (let [x, y] of coordinates) {
    if (y === middleColumn) {
      continue;
    }
    if (y < middleColumn) {
      coordinatesLeft.push([x, y]);
    } else {
      coordinatesRight.push([x, y]);
    }
  }

  coordinatesLeft = sortFromNearToFurther(coordinatesLeft, middleColumn);
  coordinatesRight = sortFromNearToFurther(coordinatesRight, middleColumn);

  //  console.log("middle data:", middleColumn);
  //   console.log('coordinatesLeft',coordinatesLeft);
  //   console.log('coordinatesRight', coordinatesRight);

  return [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight];
}

function sendOutput(result) {
  //  console.log(result);

  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  let [sideSize, board, middleColumn, coordinatesLeft, coordinatesRight] =
    getInput();

  const result = countStepsToFillColumn(
    sideSize,
    board,
    middleColumn,
    coordinatesLeft,
    coordinatesRight
  );

  sendOutput(result);
}

function moveDirectlyLeft(board, middleColumn, coordinates, sideSize) {
  let steps = 0;
  let onPlace;
  let unfinishedCoordinates = [];

  for (let [x, y] of coordinates) {
    onPlace = false;

    while (canGoLeft(board, x, y)) {
      makeStep(board, x, y, "left");
        // printBoard(sideSize, board);
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
  //  console.log(unfinishedCoordinates);

  return [unfinishedCoordinates, steps];
}

function moveDirectlyRight(board, middleColumn, coordinates, sideSize) {
  let steps = 0;
  let onPlace;
  let unfinishedCoordinates = [];

  for (let [x, y] of coordinates) {
    onPlace = false;

    while (canGoRight(board, x, y)) {
      makeStep(board, x, y, "right");
        // printBoard(sideSize, board);
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
  }
  return [unfinishedCoordinates, steps];
}

function sortFromUpToDown(array, middleColumn) {
  return array.sort((a, b) => {
    let diff = a[0] - b[0];
    if (diff === 0) {
      return Math.abs(a[1] - middleColumn) - Math.abs(b[1] - middleColumn);
    } else {
      return diff;
    }
  });
}

function processRightSide(board, coordinates, middleColumn, sideSize, x, y) {
  let steps = 0;
  let isOnPlace = false;

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
    //  console.log("on place after go left");
    coordinates.shift();
    return steps;
  }

  let index = indexFreeSpaceUp(board, x, middleColumn);

  if (index > 0) {
    //  console.log("can go up! - from right side");
    steps += x - index + 1;
    moveChess(board, x, y, index, middleColumn);
    //  printBoard(sideSize, board);
  } else if (canGoDown(board, x, y)) {
    let findPlace = false;

    while (canGoDown(board, x, y)) {
      //  console.log("can go down!");

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

      if (canGoLeft(board, x, y)) {
        makeStep(board, x, y, "left");
        //  printBoard(sideSize, board);
        --y;
        ++steps;
      }
    
    }

    if (!findPlace) {
      moveStackedCoordinate(board, x, y, sideSize, coordinates);
    }
  } else {
    //  console.log("Can't move now rigth side");

    moveStackedCoordinate(board, x, y, sideSize, coordinates);
  }
  //  console.log("coordinates-before", coordinates);

  coordinates.shift();

  //  console.log("coordinates-after", coordinates);

  return steps;
}

function processLeftSide(board, coordinates, middleColumn, sideSize, x, y) {
  let isOnPlace = false;
  let steps = 0;

  //  console.log("data-left-side", x, y);

  while (canGoRight(board, x, y)) {
    //  console.log("go right");

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
    //  console.log("on place after go right");

    coordinates.shift();
    return steps;
  }

  let index = indexFreeSpaceUp(board, x, middleColumn);

  if (index > 0) {
    //  console.log("can go up! - from left side");
    steps += x - index + 1;
    moveChess(board, x, y, index, middleColumn);
  } else if (canGoDown(board, x, y)) {
    //  console.log("can go down!");

    let findPlace = false;

    while (canGoDown(board, x, y)) {
      let index = indexFreeSpaceDown(board, x, middleColumn, sideSize);
      //  console.log("where free space: ", index);

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

      if (canGoRight(board, x, y)) {
        //  console.log("go right");
    
        makeStep(board, x, y, "right");
        //  printBoard(sideSize, board);
        ++y;
        ++steps;
      }
    }

    if (!findPlace) {
      moveStackedCoordinate(board, x, y, sideSize, coordinates);
    }
  } else {
    //  console.log("Can't move now - left side");
    moveStackedCoordinate(board, x, y, sideSize, coordinates);
  }

  //  console.log("coordinates", coordinates);

  coordinates.shift();
  return steps;
}

function countStepsToFillColumn(
  sideSize,
  board,
  middleColumn,
  coordinatesLeft,
  coordinatesRight
) {
  try {
    let steps = 0;

    if (sideSize === 1) {
      return steps;
    }

    //  console.log(coordinatesLeft);
    //  console.log(coordinatesRight);
    //  printBoard(sideSize, board);

    let [leftReminder, leftSteps] = moveDirectlyRight(
      board,
      middleColumn,
      coordinatesLeft,
      sideSize
    );
    steps += leftSteps;
    let [rightReminder, rightSteps] = moveDirectlyLeft(
      board,
      middleColumn,
      coordinatesRight,
      sideSize
    );
    steps += rightSteps;

    //  console.log("left-reminder", leftReminder);
    //  console.log("right-reminder", rightReminder);

    //  printBoard(sideSize, board);

    leftReminder = sortFromUpToDown(leftReminder, middleColumn);
    rightReminder = sortFromUpToDown(rightReminder, middleColumn);

    //  console.log(leftReminder);
    //  console.log(rightReminder);

    while (leftReminder.length > 0 || rightReminder.length > 0) {
      let currentCoordinate;
      let side;
      if (leftReminder.length > 0 && rightReminder.length > 0) {
        currentCoordinate =
          leftReminder[0][0] > rightReminder[0][0]
            ? rightReminder[0]
            : leftReminder[0];
        side = leftReminder[0][0] > rightReminder[0][0] ? "right" : "left";
        //  console.log(`processing the side: ${side}`);
      } else if (leftReminder.length > 0) {
        currentCoordinate = leftReminder[0];
        side = "left";
      } else if (rightReminder.length > 0) {
        currentCoordinate = rightReminder[0];
        side = "right";
      } else {
        throw Error("Error in logic, something wrong with reminder");
      }

      //  console.log("currentCoordinate", currentCoordinate);

      let x = currentCoordinate[0];
      let y = currentCoordinate[1];

      //  console.log("start new coordinate: ", x, y);
      //  console.log("steps", steps);
      //  console.log("side", side);

      //  printBoard(sideSize, board);

      if (side === "left") {
        //  console.log("processing left");
        steps += processLeftSide(
          board,
          leftReminder,
          middleColumn,
          sideSize,
          x,
          y
        );
        //  console.log("leftReminder", leftReminder);
      } else if (side === "right") {
        //  console.log("processing right");

        steps += processRightSide(
          board,
          rightReminder,
          middleColumn,
          sideSize,
          x,
          y
        );
      }
    }

    //  console.log("data after");
    //  printBoard(sideSize, board);

    //  console.log("steps: ", steps);

    return steps;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function moveStackedCoordinate(board, x, y, size, coordinates) {
   let index;
  //  console.log(board);
  //  console.log("x", x);
  //  console.log("y", y);
  //  console.log("data before splice", coordinates);

  let stackedCoordinates = [];
  let latestIndex;
  for (let coord = x + 1; coord < size; ++coord) {
    //  console.log(")))) ", board[coord][y]);
    //  console.log(coord, y);

    if (board[coord][y] === 1) {
      stackedCoordinates.push([coord, y]);
    }

    if (board[coord][y] === 0) {
      //  console.log("StackData", stackedCoordinates);

      latestIndex = -1;
      for (let i = coordinates.length - 1; i >= 0; i--) {
        let index = stackedCoordinates.findIndex(
          (coord) =>
            coord[0] === coordinates[i][0] && coord[1] === coordinates[i][1]
        );
        if (index !== -1) {
          latestIndex = i;
          break;
        }
      }
      //  console.log("LAst index", latestIndex);

        let lastHyndrance = [coord - 1, y];
        // console.log("lats", lastHyndrance);

       for (let i = 0; i < coordinates.length; i++) {
         if (
           coordinates[i][0] === lastHyndrance[0] &&
           coordinates[i][1] === lastHyndrance[1]
         ) {
           index = i;
          //  console.log("StackData", stackedCoordinates);

           for (let n = index; n < coordinates.length; ++n) {
             if (
               stackedCoordinates.length > 0 &&
               stackedCoordinates.some(
                 (coord) =>
                   coord[0] === coordinates[n][0] &&
                   coord[1] === coordinates[n][1]
               )
             ) {
              //  console.log("Find one more hyndrance!, increase index!");

               index = n;
             }
           }
         }
       }
      if (latestIndex === -1) {
        throw Error("Logic is wrong. Didn't find a hyndrance");
      } else {
        coordinates.splice(latestIndex + 1, 0, [x, y]);
        //  console.log("data after splice", coordinates);

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
  //  console.log(board);
  //  console.log(x);
  //  console.log(middleColumn);
  //  console.log(sideSize);

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

  //  console.log("update board");
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

function printBoard(sideSize, board) {
  let line = "";
  for (let i = 0; i < sideSize + 2; ++i) {
    line += board[i].join(" ");
    line += "\n";
  }
  console.log(line);
}

module.exports = { countStepsToFillColumn, getInput };
