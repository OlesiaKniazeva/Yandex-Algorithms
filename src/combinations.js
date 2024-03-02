/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let combinations = [];
  let currentArray = [];

  function deapthFirstSearch(currentNumber) {
    if (currentArray.length === k) {
      combinations.push(currentArray.slice())
    }
  }


  return combinations;
};

var result = bruteForce;

function bruteForce(n, k) {}

module.exports = { combine };
