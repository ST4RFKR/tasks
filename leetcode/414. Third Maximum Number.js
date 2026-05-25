/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let unicNumbers = [...new Set(nums)].sort((a, b) => b - a);

    let len = unicNumbers.length;

    if (len >= 3) {
        return unicNumbers[2];
    } else {
        return unicNumbers[0];
    }


};
