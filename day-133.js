//  https://www.geeksforgeeks.org/problems/two-repeated-elements-1587115621/1





class Solution {
    // Function to find two repeated elements.
    twoRepeated(arr, n) {
        // Your code here
        let array = [];
        let visit = new Set();
        for (let i = 0; i < arr.length; i++) {
            if (!visit.has(arr[i])) {
                visit.add(arr[i]);
            } else {
                array.push(arr[i]);
            }
        }
        return array;
    }
}
