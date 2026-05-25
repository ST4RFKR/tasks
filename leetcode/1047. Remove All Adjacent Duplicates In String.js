/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {

  let res = []

  for (let i = 0; i < s.length; i++) {
    const element = s[i];


    if (res.length && res[res.length - 1] === element) {
      res.pop()
    } else {
      res.push(element)
    }

  }
  return res.join('')
};

console.log(removeDuplicates("abbaca"));

