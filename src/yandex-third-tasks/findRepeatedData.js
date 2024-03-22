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
  // console.log(firstArray);
  // console.log(secondArray);
  // console.log(thirdArray);

  let map1 = createMap(firstArray);
  let map2 = createMap(secondArray);
  let map3 = createMap(thirdArray);

  // console.log(map1);
  // console.log(map2);
  // console.log(map3);
  
  if (map1.size === map2.size && map2.size === map3.size) {
    let result = compareThreeMaps(map1, map2, map3);

    if (result === 1) {
      return [...map1.keys()].map(Number).sort((a, b) => a - b);
    }

    let result2 = compareTwoMaps(map2, map3);
    if (result2 === 1) {
      return [...map2.keys()].map(Number).sort((a, b) => a - b);
    }

  } else if (map1.size === map2.size) {
    let result = compareTwoMaps(map1, map2);
    if (result === 1) {
      return [...map1.keys()].map(Number).sort((a, b) => a - b);
    }
  } else if (map1.size === map3.size) {
    let result = compareTwoMaps(map1, map3);
    if (result === 1) {
      return [...map1.keys()].map(Number).sort((a, b) => a - b);
    }
  } else if (map2.size === map3.size) {
    let result = compareTwoMaps(map2, map3);
    if (result === 1) {
      return [...map2.keys()].map(Number).sort((a, b) => a - b);
    }
  }

  return [];
}

function compareTwoMaps(map1, map2) {
  for (let key of map1.keys()) {
    if (!map2.has(key)) {
      return -1;
    }
  }
  return 1;
}

function compareThreeMaps(map1, map2, map3) {
  let firstSecondDifferent = false;
  let firstThirdDifferent = false;

  for (let key of map1.keys()) {
    if (firstSecondDifferent && firstThirdDifferent) {
      break;
    }
    if (!firstSecondDifferent && !map2.has(key)) {
      firstSecondDifferent = true;
    }
    if (!firstThirdDifferent && !map3.has(key)) {
      firstThirdDifferent = true;
    }
  }
  return (firstSecondDifferent && firstThirdDifferent) ? -1 : 1;
}

function createMap(array) {
  let map = new Map();

  for (let number of array) {
    map.set(number, true);
  }
  return map;
}


module.exports = {findRepeated};