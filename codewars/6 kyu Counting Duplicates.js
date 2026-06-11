// function duplicateCount(text) {
//   const map = new Map();
//   let count = 0;
//   const normalizeText = text.toLowerCase();

//   for (let ch of normalizeText) {
//     map.set(ch, (map.get(ch) || 0) + 1);
//   }

//   for (let [_, value] of map) {
//     if (value >= 2) {
//       count++;
//     }
//   }
//   return count;
// }

// В одном цыкле
function duplicateCount(text) {
  const map = new Map();
  let count = 0;
  const result = [];
  const normalizeText = text.toLowerCase();

  for (let ch of normalizeText) {
    map.set(ch, (map.get(ch) || 0) + 1);
    if (map.get(ch) === 2) {
      count++;
    }
  }

  for (const [key, value] of map) {
    if (value === 1) {
      result.push(key);
    }
  }

  return count;
}
