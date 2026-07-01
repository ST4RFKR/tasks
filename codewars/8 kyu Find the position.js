function position(letter) {
  const charCodeLetter = letter.charCodeAt();
  const positionFromAlphabet = charCodeLetter - 96;

  return `Position of alphabet: ${positionFromAlphabet}`;
}
