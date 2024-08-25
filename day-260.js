//      https://www.geeksforgeeks.org/problems/number-of-pairs-1587115620/1



class Solution {
    // Function to count number of pairs such that x^y is greater than y^x.
    countPairs(arr, brr) {
        const logTransform = (array) => {
            return array.map(num => Math.log(num) / num);
        };

        arr = logTransform(arr);
        brr = logTransform(brr);

        arr.sort((a, b) => a - b);
        brr.sort((a, b) => a - b);

        let cnt = 0;
        for (let i = 0; i < arr.length; i++) {
            const idx = this.binarySearch(brr, arr[i]);
            cnt += idx;
        }
        return cnt;
    }

    binarySearch(array, target) {
        let left = 0, right = array.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}
