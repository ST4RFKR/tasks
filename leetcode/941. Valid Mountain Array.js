/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {

    let n = arr.length;
    if (n < 3) return;

    let i = 0;


    while (i > i + 1) {
        i++
    }
    if (i === 0 || i === n - 1) return false;
};

console.log(validMountainArray([0, 3, 2, 1]));
