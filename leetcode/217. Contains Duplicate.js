/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let res = new Set()
  for (let num of nums) {
    if (res.has(num)) return true;
    res.add(num)
  }
  return false
};
console.log(containsDuplicate([1, 2, 3, 1]));
