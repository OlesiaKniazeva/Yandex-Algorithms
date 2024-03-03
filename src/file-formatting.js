const fs = require("node:fs");

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split("\n");
  return result.slice(1).map(Number);   
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const spacesForStrings = getInput();

  const result = fileFormatting(spacesForStrings);

  sendOutput(result);
}

/**
 * @param {Number[]} spacesForStrings
 * @returns {Number} minimal amount of spaces needed
 */
function fileFormatting(spacesForStrings) {
  let minimalKeyPress = 0;

  for (let spaces of spacesForStrings) {
    while (spaces >= 4) {
      if (spaces % 4 === 0) {
        minimalKeyPress += spaces / 4;
        spaces = 0;
      } else if ((spaces - 3) % 4 === 0) {
        minimalKeyPress += 2;
        spaces -= 3;
      } else {
        spaces--;
        minimalKeyPress++;
      }
    }

    if (spaces === 3) {
      minimalKeyPress += 2;
    } else {
      minimalKeyPress += spaces;
    }

  }
  return minimalKeyPress;
}

module.exports = { fileFormatting };
