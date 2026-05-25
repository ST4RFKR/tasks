/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let left = 0,
    right = 0;
  let result = "";

  while (left < word1.length || right < word2.length) {
    debugger;
    if (left < word1.length) {
      result += word1[left];
      left++;
    }
    if (right < word2.length) {
      result += word2[right];
      right++;
    }
  }
  return result;
};

console.log(mergeAlternately("abc", "pqr"));
