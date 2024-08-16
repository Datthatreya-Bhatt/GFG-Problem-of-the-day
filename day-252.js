//      https://www.geeksforgeeks.org/problems/cutted-segments1642/1



class Solution
{
    //Function to find the maximum number of cuts.
    maximizeTheCuts(n, x, y, z) {
    let dp = new Array(n + 1).fill(-Infinity);
    dp[0] = 0;

    for (let l = 1; l <= n; l++) {
        for (let s of [x, y, z]) {
            if (l >= s) {
                dp[l] = Math.max(dp[l], dp[l - s] + 1);
            }
        }
    }
    
    return dp[n] !== -Infinity ? dp[n] : 0;
}

}