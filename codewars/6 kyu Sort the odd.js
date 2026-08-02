function sortArray(array) {
  const result = [];
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let oddIdx = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(oddNumbers[oddIdx]);
      oddIdx++;
    } else {
      result.push(array[i]);
    }
  }

  return result;
}
