/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  let map1 = new Map();

  for (const ch of s) {
    if (!map.has(ch) && !map1.has(ch)) {
      map.set(ch, 0);
      map1.set(ch, 0);
    }
    map.set(ch, map.get(ch) + 1);
    map1.set(ch, map1.get(ch) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    console.log(map.get(s[i]), map1.get(t[i]));
    if (map.get(s[i]) !== map1.get(t[i])) {
      return false;
    }
  }
  return true;
};
