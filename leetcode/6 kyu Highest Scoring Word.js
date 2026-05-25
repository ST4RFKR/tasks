function high(x) {
  const words = x.split(" ");
  let maxScore = 0;
  let result = "";

  for (const word of words) {
    let score = 0;

    for (const ch of word) {
      score += ch.charCodeAt(0) - 96;
    }

    if (score > maxScore) {
      maxScore = score;
      result = word;
    }
  }

  return result;
}
