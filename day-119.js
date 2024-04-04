//  https://geeksforgeeks.org/problems/sum-of-all-substrings-of-a-number-1587115621/1





class Solution
{
    //Function to find sum of all possible substrings of the given string.
    sumSubstrings(s) {
        let ans = 0;
        let sm1 = 0;
        let sm0 = 0;
        for (let ix = 0; ix < s.length; ix++) {
            sm1 = (sm0 * 10 + parseInt(s[ix]) * (ix + 1)) % (Math.pow(10, 9) + 7);
            ans = (ans + sm0) % (Math.pow(10, 9) + 7);
            sm0 = sm1;
        }
        return (ans + sm0) % (Math.pow(10, 9) + 7);
    }

}