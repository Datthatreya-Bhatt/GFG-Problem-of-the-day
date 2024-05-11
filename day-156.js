//      https://www.geeksforgeeks.org/problems/juggler-sequence3930/1



class Solution {
    /**
    * @param number n

    * @returns number[]
    */
      jugglerSequence(n) {
        let sequence = [n];
        
        // Generate the sequence
        while (n !== 1) {
          if (n % 2 === 0) {
            n = Math.floor(Math.pow(n, 0.5));
          } else {
            n = Math.floor(Math.pow(n, 1.5));
          }
          
          sequence.push(n);
        }
        
        return sequence;
      }
}