// write the function isAnagram
var isAnagram = function(test, original) {
  const map = new Map();
  
  for (const ch of test.toLowerCase()){
    map.set(ch, (map.get(ch) || 0) + 1)
  }
    for (const ch of original.toLowerCase()){
    map.set(ch, (map.get(ch) - 1))
  }
  
      for (const [key, value] of map){
    if (value !== 0){
      return false
    }
  }
  return true;
  
};
