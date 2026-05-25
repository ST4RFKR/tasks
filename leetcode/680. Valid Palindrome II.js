/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrom(begin, end) {
  while (begin < end) {
    if (s[begin] !== s[end]) {
      return false
    }
    begin++
    end--
  }
}
var validPalindrome = function (s) {
  let begin = 0
  let end = s.length - 1;
  if (s.length <= 1) return false


  while (begin < end) {
    if (s[begin] === s[end]) {
      begin++;
      end--;
    } else {
      return isPalindrom(begin + 1, end) || isPalindrom(begin, end - 1)
    }
  }
  return true

};

console.log(validPalindrome("abca"));
