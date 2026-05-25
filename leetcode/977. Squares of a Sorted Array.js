/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length - 1;

  let left = 0;
  let right = n;

  const result = new Array(nums.length).fill(0);

  for (let i = n; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
};
