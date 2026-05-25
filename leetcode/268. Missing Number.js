/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0;
    let maxSum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    for (let i = 0; i < nums.length + 1; i++) {
        maxSum += i
    }
    return maxSum - sum
};

// var missingNumber2 = function (nums) {
//     const sortNumbers = [...nums].sort((a, b) => a - b)


//     for (let i = 0; i < sortNumbers.length; i++) {
//         if (sortNumbers[i] !== i) {
//             return i
//         }
//     }
//     return nums.length
// };


