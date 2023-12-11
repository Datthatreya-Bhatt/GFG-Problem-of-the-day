//https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1


class Solution {
    maximumSumSubarray(K, Arr, N) {
      let maxSum = 0;
      let currentSum = 0;
  
      // Calculate the initial sum of the first window of size K.
      for (let i = 0; i < K; i++) {
        currentSum += Arr[i];
      }
  
      // Set maxSum to the initial sum.
      maxSum = currentSum;
  
      // Slide the window through the array and update the sums.
      for (let i = K; i < N; i++) {
        // Subtract the element that goes out of the window.
        currentSum -= Arr[i - K];
        // Add the current element to the window.
        currentSum += Arr[i];
        // Update maxSum if the current sum is greater.
        maxSum = Math.max(maxSum, currentSum);
      }
  
      return maxSum;
    }
  }
  
  