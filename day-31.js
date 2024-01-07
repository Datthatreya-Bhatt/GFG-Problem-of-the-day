// https://www.geeksforgeeks.org/problems/split-array-largest-sum--141634/1


class Solution {
    // Function to split array into K subsets with equal sum.
    splitArray(arr, N, K) {
        function isValid(mid) {
            let splits = 1;
            let currSum = 0;

            for (let num of arr) {
                currSum += num;
                if (currSum > mid) {
                    splits++;
                    currSum = num;
                }
            }

            return splits <= K;
        }

        let left = Math.max(...arr);
        let right = arr.reduce((acc, num) => acc + num, 0);
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (isValid(mid)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }
}