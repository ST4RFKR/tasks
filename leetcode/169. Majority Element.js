/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let counts = new Map();
    let n = nums.length;

    for (let num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
        if (counts.get(num) > Math.floor(n / 2)) {
            return num;
        }
    }
};
var majorityElement = function (nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

console.log(majorityElement([1, 1, 1, 1, 1, 2, 2, 2, 2, 2]));
