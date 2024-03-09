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
  let alternativeRounds = -1;

  enemyHealthPoints -= mySoldiersAmount;

  if (enemyHealthPoints <= 0) {
    return winRound;
  }
  let enemySoldiersAmount = enemySoldiersProduce;

  while (true) {
    console.log(
      `winRound=${winRound}, mySoldiers=${mySoldiersAmount}, enemyHealth=${enemyHealthPoints}, enemies=${enemySoldiersAmount}`
    );

    if (mySoldiersAmount <= 0) {
      console.log("--------------");
      return alternativeRounds !== -1 ? alternativeRounds : -1;
    }
    if (enemyHealthPoints <= 0 && enemySoldiersAmount <= 0) {
      console.log("--------------");
      if (alternativeRounds === -1) {
        return winRound;
      }
      return winRound < alternativeRounds ? winRound : alternativeRounds;
    }

    let reminder = mySoldiersAmount - enemyHealthPoints;
    let enemiesAfterKillingBase = enemySoldiersAmount - reminder;
    if (
      enemyHealthPoints - mySoldiersAmount <= 0 &&
      mySoldiersAmount - enemiesAfterKillingBase >= enemiesAfterKillingBase
    ) {
      enemyHealthPoints = 0;
      enemySoldiersAmount -= reminder;
    } else {
      if (enemyHealthPoints - mySoldiersAmount <= 0) {
        let result = canWin(
          mySoldiersAmount - enemiesAfterKillingBase,
          enemySoldiersAmount - reminder
        );
        if (
          (alternativeRounds === -1 && result !== -1) || (alternativeRounds !== -1 && result !== -1 && (result + winRound + 1 < alternativeRounds))) {
          alternativeRounds = result + winRound + 1;
        }
      }

      let reminder2;

      if (enemySoldiersAmount <= mySoldiersAmount) {
        reminder2 = mySoldiersAmount - enemySoldiersAmount;
        enemySoldiersAmount = 0;
        enemyHealthPoints -= reminder2;
      } else if (enemyHealthPoints <= mySoldiersAmount) {
        reminder2 = mySoldiersAmount - enemyHealthPoints;
        enemyHealthPoints = 0;
        enemySoldiersAmount -= reminder2;
      } else {
        enemySoldiersAmount -= mySoldiersAmount;
      }
    }

    mySoldiersAmount -= enemySoldiersAmount;
    if (enemyHealthPoints > 0) {
      enemySoldiersAmount += enemySoldiersProduce;
      if (enemySoldiersAmount === mySoldiersAmount) {
        return (alternativeRounds != -1) ? alternativeRounds : -1;
      }
    }
    ++winRound;
  }
}

function canWin(mySoldiersAmount, enemySoldiersAmount) {
  let rounds = 1;

  while (mySoldiersAmount > 0 || enemySoldiersAmount > 0) {
    enemySoldiersAmount -= mySoldiersAmount;
    if (enemySoldiersAmount <= 0) {
      return rounds;
    }
    mySoldiersAmount -= enemySoldiersAmount;
    if (mySoldiersAmount <= 0) {
      return -1;
    }
    rounds++;
  }
}

module.exports = { playTheGame };
