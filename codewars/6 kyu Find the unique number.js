function findUniq(arr) {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
}
