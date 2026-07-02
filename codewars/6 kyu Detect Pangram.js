function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const map = new Map();

  for (const ch of alphabet.split("")) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (const ch of string.toLowerCase()) {
    map.set(ch, map.get(ch) - 1);
  }

  for (const [key, value] of map) {
    if (value > 0) {
      return false;
    }
  }

  return true;
}
