/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let left = 0
    let right = nums.length - 1;
    let maxSum = 0;
    
    let sorted = sort((a, b) => a - b )

    while (left < right){
      maxSum = Math.max(sorted[left] + sorted[right], maxSum)
      left+= 1;
      right-=1
    }
    return maxSum
    
};