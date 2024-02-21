//  https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1



class Solution {
    countWays(s, n) {
        // console.log(n, s)
        let dpTrue = new Array(n).fill(0).map(() => new Array(n).fill(0));
        let dpFalse = new Array(n).fill(0).map(() => new Array(n).fill(0));
        
        const mod = 1003;
        
        for (let i = 0; i < n; i += 2) {
            if (s[i] === "T") {
                dpTrue[i][i] = 1;
                dpFalse[i][i] = 0;
            } else {
                dpTrue[i][i] = 0;
                dpFalse[i][i] = 1;
            }
        }
        
        let x = 2;
        while (x < n) {
            for (let i = 0; i < n - x + 1; i += 2) {
                for (let j = i + 1; j < i + x; j += 2) {
                    if (s[j] === "&") {
                        dpTrue[i][i + x] += dpTrue[i][j - 1] * dpTrue[j + 1][i + x];
                        dpFalse[i][i + x] += dpFalse[i][j - 1] * dpFalse[j + 1][i + x] + dpFalse[i][j - 1] * dpTrue[j + 1][i + x] + dpTrue[i][j - 1] * dpFalse[j + 1][i + x];
                    } else if (s[j] === "|") {
                        dpTrue[i][i + x] += dpTrue[i][j - 1] * dpTrue[j + 1][i + x] + dpFalse[i][j - 1] * dpTrue[j + 1][i + x] + dpTrue[i][j - 1] * dpFalse[j + 1][i + x];
                        dpFalse[i][i + x] += dpFalse[i][j - 1] * dpFalse[j + 1][i + x];
                    } else {
                        dpTrue[i][i + x] += dpTrue[i][j - 1] * dpFalse[j + 1][i + x] + dpFalse[i][j - 1] * dpTrue[j + 1][i + x];
                        dpFalse[i][i + x] += dpTrue[i][j - 1] * dpTrue[j + 1][i + x] + dpFalse[i][j - 1] * dpFalse[j + 1][i + x];
                    }
                    dpTrue[i][i + x] = dpTrue[i][i + x] % mod;
                    dpFalse[i][i + x] %= mod;
                }
            }
            x += 2;
        }
        return dpTrue[0][n - 1] % mod;
    }
}