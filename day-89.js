//  https://www.geeksforgeeks.org/problems/maximum-index-1587115620/1


class Solution {
    // Function to find the maximum index difference.
    maxIndexDiff(a, n) {
        let sf = new Array(n).fill(0);
        sf[n - 1] = [a[n - 1], n - 1];
        
        for (let i = n - 2; i >= 0; i--) {
            if (sf[i + 1][0] >= a[i]) {
                sf[i] = [sf[i + 1][0], sf[i + 1][1]];
            } else {
                sf[i] = [a[i], i];
            }
        }
        
        let result = 0;
        let track = 0;
        
        for (let i = 0; i < n; i++) {
            while (track < n && sf[track][0] >= a[i]) {
                track = sf[track][1];
                result = Math.max(result, track - i);
                track++;
            }
        }
        
        return result;
    }
}
