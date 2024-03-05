const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split("\n");
  return [
    result[0].split(":").map(Number),
    result[1].split(":").map(Number),
    Number(result[2]),
  ];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  let [goalsFirstMatch, goalsSecondMatch, place] = getInput();

  let result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  sendOutput(result);
}

/**
 *
 * @param {[number, number]} goalsFirstMatch, goals command 1, goals command 2
 * @param {[number, number]} GoalsSecondMatch, goals command 1, goals command 2
 * @param {number} first game plase, 1 - home, 2 - outside
 * @returns number, goals amount
 */
function getGoalsToWin(
  [firstMatchTeam1, firstMatchTeam2] = [],
  [secondMatchTeam1, secondMatchTeam2] = [],
  place
) {
  let nowPlayOutside = place === 2 ? false : true;

  let firstTeamGoals = firstMatchTeam1 + secondMatchTeam1;
  let secondTeamGoals = firstMatchTeam2 + secondMatchTeam2;

  if (firstTeamGoals > secondTeamGoals) {
    return 0;
  }

  if (firstTeamGoals === secondTeamGoals) {
    /* If won guest match */
    if (
      (nowPlayOutside && secondMatchTeam1 > firstMatchTeam2) ||
      (!nowPlayOutside && firstMatchTeam1 > secondMatchTeam2)
    ) {
      return 0;
    } else {
      return 1;
    }
  } else {
    /* If already won guest match or will win it after equal goals */
    if (
      (!nowPlayOutside && firstMatchTeam1 > secondMatchTeam2) ||
      (nowPlayOutside &&
        secondTeamGoals - firstTeamGoals + secondMatchTeam1 > firstMatchTeam2)
    ) {
      return secondTeamGoals - firstTeamGoals;
    } else {
      return secondTeamGoals - firstTeamGoals + 1;
    }
  }
}

module.exports = { getGoalsToWin };
