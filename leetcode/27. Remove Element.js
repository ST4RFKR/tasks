/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k += 1
    }
  }
  return [k, nums]

};
console.log(removeElement([3, 2, 2, 3], 3));


// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]