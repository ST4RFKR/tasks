/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let prev = 0, next = 1;
  for (let i = 0; i < n; i++) {
    next = prev + next;
    prev = next - prev;
  }
  return prev;
};
console.log(fib(6));
