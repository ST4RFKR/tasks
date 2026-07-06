function isIsogram(str) {
  const s = str.toLowerCase();

  if (!/^[a-z]*$/.test(s)) {
    return false;
  }

  return s.length === new Set(s).size;
}
