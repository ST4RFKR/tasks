function count(string) {
  const result = {}
  
  for (let i = 0; i < string.length; i++){
    if (!result[string[i]]){
      result[string[i]] = 0;
    }
    result[string[i]] += 1;
  }
  
  
  return result;
}

function count(string) {
  const result = new Map();

  for(const char of string) {
    result.set(char, (result.get(char) || 0) + 1)
  }
  return Object.fromEntries(result);
}