/**
 * @param {array} array
 * @returns number
 */
var maxInSequence = function(array) {
  let max = array ? array[0] : undefined;

  array.forEach(element => {
    max = max < element ? element : max;
  })

  return max;
}


module.exports = {maxInSequence};