function strCount(str, letter){  
  let count = 0;
  for (const ch of str) {
    if (ch === letter){
      count += 1
    }
  }
  return count
}