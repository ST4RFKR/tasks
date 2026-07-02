function wordSum(w) {
  let result = 0;

  for (let i = 0; i < w.length; i++) {
    result += w[i].charCodeAt(0) - 96;
  }

  return result;
}

function high(x) {
  const arr = x.split(" ");

  let sum = wordSum(arr[0]);
  let word = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (wordSum(arr[i]) > sum) {
      sum = wordSum(arr[i]);
      word = arr[i];
    }
  }

  return word;
}
