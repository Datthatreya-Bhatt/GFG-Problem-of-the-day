//  https://www.geeksforgeeks.org/problems/in-first-but-second5423/1




class Solution {
    findMissing(a, b, n, m) {
      // Convert array b to a set for efficient lookup
      let set_b = new Set(b);
  
      // Initialize an array to store missing elements
      let missing_elements = [];
  
      // Iterate over elements of array a
      for (let num of a) {
        // If num is not present in set_b, it's a missing element
        if (!set_b.has(num)) {
          missing_elements.push(num);
        }
      }
  
      return missing_elements;
    }
  }
  