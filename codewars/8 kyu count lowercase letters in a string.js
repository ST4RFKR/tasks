function lowercaseCount(str) {
  //How many?
  let count = 0;

  for (const ch of str) {
    const codeCh = ch.charCodeAt() - 96;

    if (codeCh > 0 && codeCh < 27) {
      count++;
    }
  }
  return count;
}
