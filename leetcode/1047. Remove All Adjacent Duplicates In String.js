/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];

  for (const ch of s) {
    if (stack.includes(ch)) {
      stack.pop(ch);
    } else {
      stack.push(ch);
    }
  }
  return stack.join("");
};
