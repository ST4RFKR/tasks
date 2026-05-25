/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false;
    let count = new Map();

    for (const ch of magazine) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    for (const ch of ransomNote) {
        if (!count.has(ch)) return false;
        count.set(ch, count.get(ch) - 1);
    }
    return true


};


canConstruct('aa', 'ab')