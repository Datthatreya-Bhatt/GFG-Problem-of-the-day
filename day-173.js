//      https://www.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1




class Solution {
    /**
    * @param number n
    * @param number w
    * @param number[] cost

    * @returns number
    */
    minimumCost(n, target_weight, costs) {
        let dp = new Array(target_weight + 1).fill(Infinity);
        dp[0] = 0;
        for (let weight = 1; weight <= n; weight++) {
            for (let new_weight = weight; new_weight <= target_weight; new_weight++) {
                dp[new_weight] = Math.min(dp[new_weight], costs[weight - 1] + dp[new_weight - weight]);
            }
        }
        return dp[target_weight] !== Infinity ? dp[target_weight] : -1;
    }

}