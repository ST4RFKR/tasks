/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  let stack = []
  for (let i = 0; i < s.length; i++) {
    let ch = s[i]

    if (pairs[ch]) {
      // открывающая: кладём ожидаемую закрывающую
      stack.push(pairs[ch])
    } else {
      // закрывающая: сверяем со стеком
      if (stack.pop() !== ch) {
        return false
      }
    }
  }
  return stack.length === 0
};
console.log(isValid('(){}[]'));



