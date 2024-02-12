// https://www.geeksforgeeks.org/problems/recursive-sequence1611/1


class Solution {
    //Function to find the nth term of the sequence.
     sequence(m) {
      return this.rec(m + 1, 1, 1);
    }
    
     rec(m, n, curv) {
      if (n === m) return 0;
      let temp = 1;
      for (let i = 0; i < n; i++) {
        temp = (temp * curv) % 1000000007;
        curv++;
      }
      return (temp + this.rec(m, n + 1, curv)) % 1000000007;
    }

}