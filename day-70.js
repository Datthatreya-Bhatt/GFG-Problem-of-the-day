// https://www.geeksforgeeks.org/problems/castle-run3644/1



class Solution {
    
        isPossible(paths) {
            // code here
            return Number(paths.every(r => r.reduce((a, b) => a + b) % 2 === 0));
        }
    }
        