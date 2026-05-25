/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let first = "qwertyuiop".split("");
  let second = "asdfghjkl".split("");
  let third = "zxcvbnm".split("");
  let result = [];

  for (let i = 0; i <= words.length - 1; i++) {
    let lowerWord = words[i].toLocaleLowerCase();
    let wordArr = lowerWord.spl;
  }
  return result;
};

let words = ["Hello", "Alaska", "Dad", "Peace"];

console.log(findWords(words));
