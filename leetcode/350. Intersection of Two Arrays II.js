/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = [];
  const map = new Map();

  for (const num of nums1) {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  }

  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
