/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    const res = new Array(s.length);
    let idx = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            idx--;
        } else {
            res[idx] = s[i];
            idx++;
        }
    }

    return res.slice(0, idx).join('');
};
console.log(removeStars("leet**cod*e"));
