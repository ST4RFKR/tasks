/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const map = new Map();
  let max = 0;

  for (const row of wall) {
    let current_sum = 0;
    for (let i = 0; i < row.length - 1; i++) {
      current_sum += row[i];
      map.set(current_sum, (map.get(current_sum) || 0) + 1);
      max = Math.max(map.get(current_sum), max);
    }
  }
  return wall.length - max;
};

let wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
];

console.log(leastBricks(wall));
