/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

  let roman_map = {
    'I': 1, "V": 5, "X": 10,
    "L": 50, "C": 100, "D": 500,
    "M": 1000
  }

  let res = 0

  for (let i = 0; i < s.length; i++) {
    if (roman_map[s[i]] < roman_map[s[i + 1]]) {
      res -= +roman_map[s[i]]
    } else {
      res += +roman_map[s[i]]
    }
  }
  return res

};