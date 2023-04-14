const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numString = String(n);
  let max = 0;
  for (let i = 0; i < numString.length; i++) {
    const numArr = numString.split('');
    numArr.splice(i, 1);
    const newNum = Number(numArr.join(''));
    if (newNum > max) {
      max = newNum;
    }
  }
  return max;
}


module.exports = {
  deleteDigit
};
