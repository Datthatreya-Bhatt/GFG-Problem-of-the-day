//      https://www.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1



class Solution {
    search(arr, key) {
      let low = 0;
      let high = arr.length - 1;
    
      while (low <= high) {
        let mi = Math.floor((low + high) / 2);
    
        if (arr[mi] === key) {
          return mi;
        }
    
        if (arr[mi] >= arr[low]) {
          if (arr[low] <= key && arr[mi] > key) {
            high = mi - 1;
          } else {
            low = mi + 1;
          }
        } else {
          if (arr[mi] < key && arr[high] >= key) {
            low = mi + 1;
          } else {
            high = mi - 1;
          }
        }
      }
    
      return -1;
    }

}
