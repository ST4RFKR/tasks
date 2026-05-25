/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let matrix = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let left = 0;
    let right = s.length - 1;
    let arrS = s.split('');

    while (left < right) {
        if (!matrix.includes(arrS[left])) {
            left++
            continue
        }
        if (!matrix.includes(arrS[right])) {
            right--
            continue
        }

        [arrS[left], arrS[right]] = [arrS[right], arrS[left]]
        left++
        right--
    }
    return arrS.join('')
};