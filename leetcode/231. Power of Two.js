/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let x = 1;
    if (n < 1) return false
    while (x < n) {
        x *= 2
    }
    return x === n
};
