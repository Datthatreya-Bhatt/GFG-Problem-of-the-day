//      https://www.geeksforgeeks.org/problems/geek-and-its-game-of-coins4043/1





class Solution {
    /**
    * @param number n
    * @param number x
    * @param number y

    * @returns number
    */
    findWinner(n, x, y) {
        //code here
        let dp = new Array(n + 1).fill(0);
        dp[0] = 0;
        dp[1] = 1;
        
        for (let i = 2; i <= n; i++) {
            if ((i - 1) >= 0 && dp[i - 1] === 0) {
                dp[i] = 1;
            } else if ((i - x) >= 0 && dp[i - x] === 0) {
                dp[i] = 1;
            } else if ((i - y) >= 0 && dp[i - y] === 0) {
                dp[i] = 1;
            } else {
                dp[i] = 0;
            }
        }
        return dp[n];
    }
}
