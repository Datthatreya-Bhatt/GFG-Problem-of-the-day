//  https://www.geeksforgeeks.org/problems/paths-to-reach-origin3850/1


class Solution {
    ways(n, m) {
        const dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0));
        const d = Math.pow(10, 9) + 7;

        for (let x = 0; x <= n; x++) {
            for (let y = 0; y <= m; y++) {
                if (x === 0 || y === 0) {
                    dp[x][y] = 1;
                } else {
                    dp[x][y] = (dp[x-1][y] + dp[x][y-1]) % d;
                }
            }
        }

        return dp[n][m];
    }
}

const solution = new Solution();
console.log(solution.ways(3, 4)); // Example usage: prints 35
