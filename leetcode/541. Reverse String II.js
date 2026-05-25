/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split(''); // превращаем строку в массив для удобной перестановки
    const n = arr.length;

    for (let i = 0; i < n; i += 2 * k) {
        // вычисляем конец участка для переворота
        let left = i;
        let right = Math.min(i + k - 1, n - 1);

        // переворачиваем первые k символов в блоке
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
};