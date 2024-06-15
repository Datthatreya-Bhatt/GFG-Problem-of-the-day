//          https://www.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1


class Solution{
    getCount(n) {
        if (n === 1) {
            return 10;
        }
    
        // Predefined transitions based on problem constraints
        const arr = [
            [0, 8], // transitions for 0
            [1, 2, 4], // transitions for 1
            [1, 2, 3, 5], // transitions for 2
            [2, 3, 6], // transitions for 3
            [1, 4, 5, 7], // transitions for 4
            [2, 4, 5, 6, 8], // transitions for 5
            [3, 5, 6, 9], // transitions for 6
            [4, 7, 8], // transitions for 7
            [0, 5, 7, 8, 9], // transitions for 8
            [6, 8, 9] // transitions for 9
        ];
    
        const dp = new Array(n + 1).fill(0).map(() => new Array(10).fill(0));
    
        for (let i = 0; i <= 9; ++i) {
            dp[1][i] = 1;
        }
    
        for (let i = 2; i <= n; i++) {
            for (let j = 0; j < 10; j++) {
                dp[i][j] = 0;
                for (let x of arr[j]) {
                    dp[i][j] += dp[i - 1][x];
                }
            }
        }
    
        let ans = 0;
        for (let i = 0; i <= 9; ++i) {
            ans += dp[n][i];
        }
    
        return ans;
    }

}