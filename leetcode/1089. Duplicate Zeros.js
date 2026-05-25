
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let tempArr = []
    let begin = 0;

    while (begin < arr.length) {
        if (arr[begin] !== 0) {
            tempArr.push(arr[begin])
            begin++
        } else {
            tempArr.push(0, 0)
            begin++
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = tempArr[i];
    }

};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
