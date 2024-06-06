//      https://www.geeksforgeeks.org/problems/maximum-occured-integer4602/1




class Solution {
    // Function to find the maximum occurred integer in all ranges.
    maxOccured(n, l, r, maxx) {
        l.sort((a,b)=> a-b);
        r.sort((a,b)=> a-b);
        let i = n-1;
        let j = n-1;
        let ans = -1;
        let maxc = 0;
        while (i >= 0 && j >= 0) {
            while (i >= 0 && j >= 0 && r[j] >= l[i]) {
                j--;
            }
            let cnt = (n-1-j) - (n-1-i);
            if (cnt >= maxc) {
                maxc = cnt;
                ans = l[i];
            }
            i--;
        }
        return ans;
    }
}
