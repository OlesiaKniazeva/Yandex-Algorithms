/**
 * @param {array} array
 * @returns {number}
 */
var sumOfSequence = function (array) {
  let result = 0;

  array.forEach((element) => {
    result += element;
  });

  return result;
};

module.exports = { sumOfSequence };
