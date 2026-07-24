function findShort(s){
  let minLength = Math.min(...s.split(' ').map(word => word.length));
  
return minLength
}

