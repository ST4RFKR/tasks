function alphabetPosition(text) {
  let result = "";

  for (const char of text.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      result += char.charCodeAt(0) - 96 + " ";
    }
  }
  return result.trim();
}
