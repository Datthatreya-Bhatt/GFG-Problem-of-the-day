//  https://www.geeksforgeeks.org/problems/peak-element/1


class Solution {
    peakElement(arr, n) {
        if (n === 1) {
            return 0;
        }

        for (let i = 0; i < n; i++) {
            if (i === 0) {
                if (arr[i] >= arr[i + 1]) {
                    return i;
                }
            } else if (i === n - 1) {
                if (arr[i] >= arr[i - 1]) {
                    return i;
                }
            } else {
                if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
                    return i;
                }
            }
        }

        // If no peak element is found, return -1.
        return -1;
    }
}
