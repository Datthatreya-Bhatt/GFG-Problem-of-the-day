//  https://www.geeksforgeeks.org/problems/alone-in-couple5507/1




class Solution {
    findSingle(n, arr) {
        let ans = 0;
        for (let i of arr) {
            ans ^= i;
        }
        return ans;
    }
}

