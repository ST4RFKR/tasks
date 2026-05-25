/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let begin = 0;
  let window_state = '';

  for (let end = 0; end < haystack.length; end++) {
    window_state += haystack[end]
    if (end - begin + 1 === needle.length) {
      if (window_state === needle) {
        return begin;
      }
      window_state = window_state.slice(1);
      begin++;
    }
  }
  return -1;
};

console.log(strStr("butsad", "sad"));
