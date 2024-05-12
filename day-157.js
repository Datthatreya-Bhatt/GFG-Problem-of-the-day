//      https://www.geeksforgeeks.org/problems/minimum-number-of-steps-to-reach-a-given-number5234/1



class Solution {
    minSteps(d) {
        for (let i = 1; i < 2 * d; i++) {
            if ((((i * (i + 1)) / 2) + d) % 2 === 0 && ((i * (i + 1)) / 2) >= d) {
                return i;
            }
        }
    }
}
