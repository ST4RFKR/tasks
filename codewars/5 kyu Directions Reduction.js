function dirReduc(arr) {
  const opposite = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  const result = [];

  for (const el of arr) {
    if (opposite[result.at(-1)] === el) {
      result.pop();
    } else {
      result.push(el);
    }
  }

  return result;
}
