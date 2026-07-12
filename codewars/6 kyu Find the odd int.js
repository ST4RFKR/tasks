function findOdd(A) {
  const map = new Map();
  
  for (const num of A){
    map.set(num, (map.get(num) || 0) + 1)
  }
  
  for (const [key, value] of map){
    if (value % 2 !== 0){
      return key
    }
  }
  
}
