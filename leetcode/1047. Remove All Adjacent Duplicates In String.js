/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];

  for (const ch of s) {
    if (stack[stack.length - 1] !== ch) {
      stack.push(ch);
    } else {
      stack.pop(ch);
    }
  }
  return stack.join("");
};
