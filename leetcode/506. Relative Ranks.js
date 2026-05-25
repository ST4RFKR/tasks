/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let sortScores = [...score].sort((a, b) => b - a);
    let map = new Map();

    for (let i = 0; i < sortScores.length; i++) {
        if (i === 0) {
            map.set(sortScores[i], "Gold Medal");
        } else if (i === 1) {
            map.set(sortScores[i], "Silver Medal");
        } else if (i === 2) {
            map.set(sortScores[i], "Bronze Medal");
        } else {
            map.set(sortScores[i], (i + 1).toString());
        }
    }

    return score.map(s => map.get(s));
};
console.log(findRelativeRanks([5, 4, 3, 2, 1]));
