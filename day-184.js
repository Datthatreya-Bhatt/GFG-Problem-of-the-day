//      https://www.geeksforgeeks.org/problems/index-of-an-extra-element/1

class Solution {
    findExtra(n, a, b) {
        let i = 0;
        let j = n - 1;
        while (i <= j && i < n && j > 0) {
            if (a[i] !== b[i]) {
                return i;
            }
            if (a[j] !== b[j - 1]) {
                return j;
            }
            i++;
            j--;
        }
        return i;
    }
}
