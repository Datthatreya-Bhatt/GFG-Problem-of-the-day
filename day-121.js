//  https://www.geeksforgeeks.org/problems/count-ways-to-nth-stairorder-does-not-matter1322/1



class Solution {
    // Function to count number of ways to reach the nth stair
    // when order does not matter.
    countWays(n) {
        // code here
        return Math.floor(1 + n/2);
    }
}