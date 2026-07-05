function removeExtraLetters(str) {
  const arr = str.split("");
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    if (current !== next) {
      result.push(current);
    }
  }

  return result.join("");
}
