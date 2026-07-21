function invert(array) {
   return array.map(num => num > 0 ? -num : Math.abs(num));
}