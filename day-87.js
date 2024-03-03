//  https://www.geeksforgeeks.org/problems/largest-number-formed-from-an-array1117/1


class Solution {
    printLargest(n, arr) {
        function comparison(a, b) {
            if (a + b < b + a) {
                return 1;
            } else {
                return -1;
            }
        }
        arr.sort(comparison);
        return arr.join('');
    }
}




