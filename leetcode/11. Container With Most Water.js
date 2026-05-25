/**
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
  let result = -Infinity;
  let begin = 0;
  let end = height.length - 1;

  while (begin < end) {
    let current_result = Math.min(height[begin], height[end]) * (end - begin);
    result = Math.max(result, current_result);

    if (height[begin] < height[end]) {
      begin++;
    } else {
      end--;
    }
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
