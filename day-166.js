//      https://www.geeksforgeeks.org/problems/k-closest-elements3619/1



class Solution {
    findCrossOver(arr, low, high, x) {
      // Base cases
      if (arr[high] <= x) {
        return high;
      }
      if (arr[low] > x) {
        return low;
      }
  
      let mid = Math.floor((low + high) / 2);
  
      // Check if mid is the crossover point
      if (arr[mid] <= x && arr[mid + 1] > x) {
        return mid;
      } else if (arr[mid] < x) {
        return this.findCrossOver(arr, mid + 1, high, x);
      }
      return this.findCrossOver(arr, low, mid - 1, x);
    }
  
    printKClosest(arr, n, k, x) {
      let id1 = this.findCrossOver(arr, 0, n - 1, x);
  
      // Move forward
      let id2 = id1 + 1;
  
      // If element is present then we have to neglect
      if (id1 >= 0 && arr[id1] === x) {
        id1 -= 1;
      }
  
      let ans = [];
      for (let i = 0; i < k; i++) {
        // Both pointing at valid index
        if (id1 >= 0 && id2 < n) {
          let val1 = x - arr[id1];
          let val2 = arr[id2] - x;
          // val1 is more closest (diff is smaller)
          if (val1 < val2) {
            ans.push(arr[id1]);
            id1 -= 1;
          } else {
            // val2 is more closest or if same we prioritize the greater number
            ans.push(arr[id2]);
            id2 += 1;
          }
        } else if (id1 >= 0) {
          ans.push(arr[id1]);
          id1 -= 1;
        } else {
          ans.push(arr[id2]);
          id2 += 1;
        }
      }
  
      return ans;
    }
  }
  