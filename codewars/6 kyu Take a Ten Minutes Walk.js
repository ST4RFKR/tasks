function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;

  for (const x of walk) {
    if (x === "n") {
      n++;
    } else if (x === "s") {
      s++;
    } else if (x === "e") {
      e++;
    } else {
      w++;
    }
  }

  return n === s && e === w;
}
