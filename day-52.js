// https://www.geeksforgeeks.org/problems/geekina-hate-1s/1



class Solution {
    findNthNumber(n, k) {
        let low = 0, high = 10 ** 18;
        this.dp = new Array(2).fill(null).map(() => new Array(65).fill(null).map(() => new Array(65).fill(-1)));

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            let count = this.find(mid, k);
            if (count >= n) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }

    find(n, k) {
        let s = n.toString(2).padStart(64, '0');
        this.reset();
        return this.dpf(s, s.length, 1, k);
    }

    dpf(s, n, tight, k) {
        if (k < 0) {
            return 0;
        }
        if (n === 0) {
            return 1;
        }
        if (this.dp[tight][k][n] !== -1) {
            return this.dp[tight][k][n];
        }

        let ub = tight === 1 ? parseInt(s[s.length - n]) : 1;
        let ans = 0;
        for (let dig = 0; dig <= ub; dig++) {
            if (dig === ub) {
                ans += this.dpf(s, n - 1, tight, k - dig);
            } else {
                ans += this.dpf(s, n - 1, 0, k - dig);
            }
        }
        this.dp[tight][k][n] = ans;
        return ans;
    }

    reset() {
        for (let i = 0; i < 65; i++) {
            for (let j = 0; j < 65; j++) {
                this.dp[0][i][j] = -1;
                this.dp[1][i][j] = -1;
            }
        }
    }
}
