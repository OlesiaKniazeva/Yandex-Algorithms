const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split("\n");

  return [Number(result[0]), Number(result[1]), Number(result[2])];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  let [mySoldiersAmount, enemyHealthPoints, enemySoldiersProduce] = getInput();

  let result = playTheGame(
    mySoldiersAmount,
    enemyHealthPoints,
    enemySoldiersProduce
  );

  sendOutput(result);
}

function playTheGame(
  mySoldiersAmount,
  enemyHealthPoints,
  enemySoldiersProduce
) {
  let winRound = 1;
  enemyHealthPoints -= mySoldiersAmount;

  if (enemyHealthPoints <= 0) {
    return winRound;
  }
  let enemySoldiersAmount = enemySoldiersProduce;

  while (true) {
    console.log(
      `winRound=${winRound}, mySoldiers=${mySoldiersAmount}, enemyHealth=${enemyHealthPoints}, enemies=${enemySoldiersAmount}`
    );

    if (
      mySoldiersAmount <= 0 ||
      (mySoldiersAmount === enemySoldiersAmount &&
        mySoldiersAmount === enemySoldiersProduce)
    ) {
      console.log("--------------");
      return -1;
    }
    if (enemyHealthPoints <= 0 && enemySoldiersAmount <= 0) {
      console.log("--------------");
      return winRound;
    }

    let reminder = mySoldiersAmount - enemyHealthPoints;
    if (
      enemyHealthPoints - mySoldiersAmount <= 0 &&
      reminder > enemySoldiersAmount
    ) {
      enemyHealthPoints -= mySoldiersAmount;
      enemySoldiersAmount -= reminder;
    } else {
      let reminder;

      if (enemySoldiersAmount <= mySoldiersAmount) {
        if (mySoldiersAmount - enemyHealthPoints > enemySoldiersAmount) {
          reminder = mySoldiersAmount - enemyHealthPoints;
          enemyHealthPoints = 0;
          enemySoldiersAmount -= reminder;
        } else {
          reminder = mySoldiersAmount - enemySoldiersAmount;
          enemySoldiersAmount = 0;
          enemyHealthPoints -= reminder;
        }
      } else if (enemyHealthPoints <= mySoldiersAmount) {
        reminder = mySoldiersAmount - enemyHealthPoints;
        enemyHealthPoints = 0;
        enemySoldiersAmount -= reminder;
      } else {
        enemySoldiersAmount -= mySoldiersAmount;
      }
    }

    mySoldiersAmount -= enemySoldiersAmount;
    if (enemyHealthPoints > 0) {
      enemySoldiersAmount += enemySoldiersProduce;
    }
    ++winRound;
  }
}

module.exports = { playTheGame };
