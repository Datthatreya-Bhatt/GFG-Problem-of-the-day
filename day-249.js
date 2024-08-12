//     https://www.geeksforgeeks.org/problems/sum-of-middle-elements-of-two-sorted-arrays2305/1 


class Solution {
    SumofMiddleElements(arr1, arr2) {
        // Code Here
        let a3 = arr1.concat(arr2);
        let n = arr1.length;
        a3.sort((a, b)=>a - b);
        return a3[n - 1] + a3[n];
    }
}