//      https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1


class Solution {
    kthElement(k, arr1, arr2) {
    let arr = arr1.concat(arr2).sort((a, b) => a - b);
    return arr[k - 1];
  }
}