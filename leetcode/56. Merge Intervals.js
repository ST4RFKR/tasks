/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (const interval of intervals) {
    let recent = result[result.length - 1];

    if (recent[1] >= interval[0]) {
      recent[1] = Math.max(recent[1], interval[1]);
    } else {
      result.push(interval);
    }
  }
  console.log(result);
  return result;
}
