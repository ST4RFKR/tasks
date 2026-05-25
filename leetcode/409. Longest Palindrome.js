/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const map = new Map();
    let length = 0
    let hasOdd = false

    for (const ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (const [_, value] of map) {
        if (value % 2 === 0) {
            length += value
        } else {
            length += value - 1
            hasOdd = true
        }
    }
    if (hasOdd) length += 1;

    return length
};

