//      https://www.geeksforgeeks.org/problems/rectangles-in-a-circle0457/1



class Solution {
    // Function to count the number of rectangles that can be circumscribed in a circle.
    rectanglesInCircle(r) {
        let count = 0;
        const diameter_squared = Math.pow(2 * r, 2);
    
        // Iterate through all possible lengths from 1 to 2*r
        for (let length = 1; length <= 2 * r; length++) {
          // Calculate the maximum width that can fit for a given length
          const max_width = Math.floor(Math.sqrt(diameter_squared - Math.pow(length, 2)));
    
          // Add the number of valid widths for the current length
          count += max_width;
        }
    
        return count;
    }
}



