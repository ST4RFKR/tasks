function duplicateEncode(word){
const normalizeWord = word.toLowerCase();
const map = new Map();
let result = "";

for (const ch of normalizeWord){
  map.set(ch, (map.get(ch) || 0 ) + 1);
}

for (const ch of normalizeWord){
  if (map.get(ch) === 1){
    result += "("
  }else {
    result += ")"
  }
}

return result; 
}
