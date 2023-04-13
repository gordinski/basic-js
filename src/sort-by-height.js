const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indices = arr
    .map((value, index) => value >= 0 ? index : -1)
    .filter(index => index >= 0);

  const sorted = arr
    .filter(value => value >= 0)
    .sort((a, b) => a - b);

  indices.forEach((index, i) => arr[index] = sorted[i]);

  return arr;
}

module.exports = {
  sortByHeight
};
