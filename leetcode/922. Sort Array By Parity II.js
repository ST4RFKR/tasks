/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let odd = 1;
  let even = 0;

  while (odd < nums.length && even < nums.length) {
    debugger;
    if (nums[even] % 2 === 0) {
      even += 2;
    } else if (nums[odd] % 2 === 1) {
      odd += 2;
    } else {
      [nums[even], nums[odd]] = [nums[odd], nums[even]];
      even += 2;
      odd += 2;
    }
  }
  return nums;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
