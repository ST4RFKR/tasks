function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
    .join(" ");
}
