/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let k = candyType.length / 2;
    return Math.min(k, new Set(candyType).size);
};