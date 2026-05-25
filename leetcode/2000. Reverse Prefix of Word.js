/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const arrWord = word.split("");
  const chIdx = arrWord.indexOf(ch);

  if (chIdx === -1) return word;

  let left = 0;
  let right = chIdx;

  while (left < right) {
    let temp = arrWord[right];
    arrWord[right] = arrWord[left];
    arrWord[left] = temp;

    left++;
    right--;
  }
  return arrWord.join("");
};
