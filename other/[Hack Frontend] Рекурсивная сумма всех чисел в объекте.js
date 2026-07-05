function recursiveSum(obj) {
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      sum += recursiveSum(obj[key]);
    } else if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }

  return sum;
}
