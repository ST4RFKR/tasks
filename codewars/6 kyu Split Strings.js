function solution(str) {
  const result = [];

  let string = str.length % 2 === 0 ? str : str + "_";

  for (let i = 0; i < string.length; i += 2) {
    result.push(string[i] + string[i + 1]);
  }

  return result;
}
