function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, val) => acc * val) - b.reduce((acc, val) => acc * val),
  );
}
