/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let arr = s.split("");
    let left = 0;
    let rigth = s.length - 1;

    if (left < rigth) {
        if (!isLetter(arr[left])) left++
        if (!isLetter(arr[rigth])) rigth--

        [arr[left], arr[rigth] = arr[rigth], arr[left]]
        left++
        rigth--
    }
    return arr.join('')
};
function isLetter(ch) {
    return /^[A-Za-zА-Яа-я]$/.test(ch);
}