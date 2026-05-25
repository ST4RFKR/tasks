/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let sum = 0;
    let count = 0;

    for (let num of nums) {
        if (num === 1) {
            count++
            sum = Math.max(sum, count)

        } else {
            count = 0
        }

    }
    return sum

};

