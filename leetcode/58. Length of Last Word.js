/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  let space = ' ';
  let res = 0

  while (i >= 0 && s[i] === space) {
    i--
  }

  while (i >= 0 && s[i] !== space) {
    res += 1
    i--
  }

  return res

};