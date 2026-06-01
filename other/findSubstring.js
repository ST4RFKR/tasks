function findSubstring(substring, arr) {
  const result = [];

  arr.map((el) => {
    if (el.includes(substring)) {
      result.push(el);
    }
  });

  return result;
}
