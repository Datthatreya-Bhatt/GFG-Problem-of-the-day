//      https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1


class Solution {
    kthSmallest(arr, k) {
        // code here
        arr.sort((a, b)=> a-b);
        
        return arr[k-1]
    }
}