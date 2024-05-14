//      https://www.geeksforgeeks.org/problems/path-with-minimum-effort/1





class Solution {
    /**
    * @param number rows
    * @param number columns
    * @param number[][] heights

    * @returns number
    */
 MinimumEffort(rows, columns, heights) {
  function dfs(mid) {
    const stack = [[0, 0]];
    const visited = new Set();
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      if (x === rows - 1 && y === columns - 1) {
        return true;
      }
      visited.add(`${x},${y}`);
      const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < columns &&
          !visited.has(`${nx},${ny}`) &&
          Math.abs(heights[nx][ny] - heights[x][y]) <= mid
        ) {
          stack.push([nx, ny]);
        }
      }
    }
    return false;
  }

  let left = 0;
  let right = 1e6;
  let result = Infinity;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (dfs(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

}
