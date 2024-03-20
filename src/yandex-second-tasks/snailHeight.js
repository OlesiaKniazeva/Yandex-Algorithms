const fs = require("node:fs");

program();

function getInput(testInput = false) {
  let result;

  if (!testInput) {
    let fileContent = fs.readFileSync("./input.txt", "utf8");
    result = fileContent.toString().split("\n");
  } else {
    result = testInput;
  }

  const berriesAmount = Number(result[0]);

  let maxDayHeight = 0;
  let maxDayHeightIdx = -1;

  let data = [];

  for (let i = 0; i < berriesAmount; ++i) {
    const [upHeight, downHeight] = result[i + 1]
      .split(" ")
      .map((el) => Number(el));
    const difference = upHeight - downHeight;

    data.push({
      upHeight,
      downHeight,
      difference,
      originalIndex: i + 1,
    });

    if (upHeight > maxDayHeight && difference <= 0) {
      maxDayHeight = upHeight;
      maxDayHeightIdx = i + 1;
    }
  }

  data.sort((a, b) => b.difference - a.difference);

  return [berriesAmount, data, [maxDayHeight, maxDayHeightIdx]];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [berriesAmount, sortedHeights, maxDayHeight] = getInput();

  const result = findMaxHeight(berriesAmount, sortedHeights, maxDayHeight);

  sendOutput(result);
}

function findMaxHeight(berriesAmount, sortedHeights, maxDayHeight) {
  console.log(berriesAmount);
  console.log(sortedHeights);
  console.log(maxDayHeight);

  if (berriesAmount === 1) {
    return sortedHeights[0].upHeight + '\n' + '1';
  }

  // if (sortedHeights[0].originalIndex === maxDayHeight[1])
  // let maxHeight =

  //     ? sortedHeights[1].difference + maxDayHeight[0]
  //     : sortedHeights[0].difference + maxDayHeight[0];

  let maxHeight = 0;
  let currentHeight = 0;
  let order = [];
  let finishedIdx = -1;

  for (let i = 0; i < berriesAmount; ++i) {
    if (sortedHeights[i].difference <= 0) {
      finishedIdx = i;
      break;
    }
    currentHeight += sortedHeights[i].upHeight;

    if (currentHeight > maxHeight) {
      maxHeight = currentHeight;
    }
    currentHeight -= sortedHeights[i].downHeight;
    order.push(sortedHeights[i].originalIndex);
  }

  if (maxDayHeight[1] !== -1) {
    currentHeight += maxDayHeight[0];
    order.push(maxDayHeight[1]);
  }

  let others = [];
  if (finishedIdx >= 0) {
    others = sortedHeights.slice(finishedIdx).reduce((indexes, object) => {
      if (object.originalIndex !== maxDayHeight[1]) {
        indexes.push(object.originalIndex);
      }
      return indexes;
    }, []);
    // console.log(others);
  }
  let result = [...order, ...others].join(" ");

  let resultHeight = currentHeight > maxHeight ? currentHeight : maxHeight;
  return resultHeight + "\n" + result;
}

module.exports = { findMaxHeight, getInput };
