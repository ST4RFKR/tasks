/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = newStr.length - 1;


  while (left < right){
    if (newStr[left] === newStr[right]){
      left += 1;
      right -= 1;
    } else {
      return false
    }
  } 
  return true
};