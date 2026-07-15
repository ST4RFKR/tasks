function toCamelCase(str){
  const arr = str.split(/[-_]/);
  const result = [arr[0]];


  for (let i = 1; i < arr.length; i++) {
   const newWord = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
   result.push(newWord)
  }

  return result.join("");
}

console.log(toCamelCase("the-stealth-warrior"))