const fs = require("node:fs");

program();

function getInput(testData) {
  let fileContent;

  if (!testData) {
    fileContent = fs.readFileSync("input.txt", "utf8").split("\n");
  } else {
    fileContent = testData;
  }

  let [regimentsAmount, trainsAmount] = fileContent[0]
    .split(" ")
    .map((el) => Number(el));

  let soldiersAmounts = fileContent[1].split(" ").map((el) => BigInt(el));

  let dataSets = [];
  for (let i = 2; i < trainsAmount + 2; ++i) {
    let [regimentsToSend, soldiersToSend] = fileContent[i].split(" ");
    regimentsToSend = Number(regimentsToSend);
    soldiersToSend = BigInt(soldiersToSend);
    dataSets.push([regimentsToSend, soldiersToSend]);
  }

  return [regimentsAmount, soldiersAmounts, dataSets];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.join("\n"));
}

function program() {
  let [regimentsAmount, soldiersAmounts, dataSets] = getInput();

  let result = processData(regimentsAmount, soldiersAmounts, dataSets);

  sendOutput(result);
}

function processData(regimentsAmount, soldiersAmounts, dataSets) {
  // console.log(regimentsAmount);
  // console.log(soldiersAmounts);
  // console.log(dataSets);

  let results = [];

  let soldiersCumulativeAmount = countSoldiersCumulativeAmount(
    regimentsAmount,
    soldiersAmounts
  );

  // console.log("cumSum: ", soldiersCumulativeAmount);

  let data;

  for (let dataSet of dataSets) {
    if (dataSet[0] === 1) {
      data = findRegiment(soldiersAmounts, dataSet[1]);
    } else {
      data = findStartRegiment(
        soldiersCumulativeAmount,
        regimentsAmount,
        dataSet[0],
        dataSet[1]
      );
    }
    // console.log(data);
    results.push(data);
  }

  return results;
}

function findStartRegiment(
  soldiersCumulativeAmount,
  regimentsAmount,
  regimentsToSend,
  soldiersAmount
) {
  // console.log(regimentsAmount);
  // console.log(regimentsToSend);
  // console.log(soldiersAmount);

  let left = 0;
  let right = regimentsAmount - regimentsToSend;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);

    if (
      soldiersCumulativeAmount[middle + regimentsToSend] -
        soldiersCumulativeAmount[middle] <
      soldiersAmount
    ) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  if (
    soldiersCumulativeAmount[left + regimentsToSend] -
      soldiersCumulativeAmount[left] !==
    soldiersAmount
  ) {
    return -1;
  }
  return left + 1;
}

function findRegiment(soldiersAmounts, requiredAmount) {
  // console.log(soldiersAmounts);
  // console.log("req: ", requiredAmount);

  let left = 0;
  let right = soldiersAmounts.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    // console.log("middle:", middle);

    if (soldiersAmounts[middle] >= requiredAmount) {
      right = middle;
    } else {
      left = middle + 1;
    }
    // console.log("right: ", right, "left: ", left);
  }
  return soldiersAmounts[left] === requiredAmount ? left + 1 : -1;
}

function countSoldiersCumulativeAmount(regimentsAmount, soldiersAmounts) {
  let cumSum = new Array(regimentsAmount + 1).fill(0n);

  let sum = 0n;
  for (let i = 1; i < regimentsAmount + 1; ++i) {
    cumSum[i] = sum + soldiersAmounts[i - 1];
    sum += soldiersAmounts[i - 1];
  }

  // console.log('cumSum');
  return cumSum;
}

module.exports = { getInput, processData };
