//https://www.geeksforgeeks.org/problems/candy/1


class Solution {
    minCandy(N, ratings) {
        const candies = new Array(N).fill(1);
        for (let i = 1; i < N; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }
        for (let i = N - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            }
        }
        return candies.reduce((sum, candy) => sum + candy, 0);
    }
}