/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let total_sum = 0;
    let left_sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        total_sum += element
    }


    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        let right_sum = total_sum - left_sum - element;
        if (left_sum === right_sum) {
            return i;
        }
        left_sum += element;
    }

    return -1
};


