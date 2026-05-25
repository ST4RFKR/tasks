/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let map = new Map();
    if (s.length !== t.length) return false;

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    for (let ch of t) {
        map.set(ch, (map.get(ch)) - 1)
    }

    for (let [key, value] of map) {
        if (value !== 0) return false;
    }

    return true;

};
isAnagram("anagram", "anagram")