function remove(string) {
  let count = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === "!") {
      count++;
    } else {
      break;
    }
  }

  return string.slice(0, string.length - count);
}
