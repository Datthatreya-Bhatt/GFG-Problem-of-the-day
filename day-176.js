//      https://www.geeksforgeeks.org/problems/swap-two-nibbles-in-a-byte0446/1



class Solution {
    swapNibbles(n) {
      // Conversion of n into binary form
      let a = "";
      while (n > 0) {
        a = String(n % 2) + a;
        n = Math.floor(n / 2);
      }
      if (a.length < 8) {
        const m = 8 - a.length;
        a = "0".repeat(m) + a;
      }
  
      // Exchange of the two half-byte
      a = a.slice(4, 8) + a.slice(0, 4);
      let solution = 0;
      let base = 1;
  
      // Transformation of binary code into decimal
      for (let i = 0; i < a.length; i++) {
        if (a[a.length - i - 1] === "1") {
          solution += base;
        }
        base = base * 2;
      }
  
      return solution;
    }
  }
  