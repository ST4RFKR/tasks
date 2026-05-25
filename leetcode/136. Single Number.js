/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    map.set(current, (map.get(current) || 0) + 1);
  }

  for (let [k, v] of map) {
    if (v === 1) {
      return k;
    }
  }
};

console.log(singleNumber([2, 2, 3, 3, 4, 5, 5]));


/** 
// var singleNumber = function (nums) {
// let res = 0

// for (let n of nums){
//     res ^= n
// }

// return res 
// };
//  */