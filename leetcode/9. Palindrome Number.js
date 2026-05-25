/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const nToS = x.toString();

      let left = 0;
      let right = nToS.length - 1;

        while (left < right){
    if (nToS[left] === nToS[right]){
      left += 1;
      right -= 1;
    } else {
      return false
    }
  } 
  return true
};