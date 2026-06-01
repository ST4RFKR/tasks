function findDeepestMaxElement(array) {
  let max = -Infinity;

  for (const el of array) {
    if (Array.isArray(el)) {
      const result = Math.max(max, findDeepestMaxElement(el));
      max = Math.max(max, result);
    } else {
      max = Math.max(max, el);
    }
  }
  return max;
}

const array = [10, [5, [15, [50]], 20]];
console.log(findDeepestMaxElement(array)); // 50
