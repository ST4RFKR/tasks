function solution(string) {
  const result = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result.push(' ');
    }
    result.push(string[i]);
  }
  return result.join('');
}
