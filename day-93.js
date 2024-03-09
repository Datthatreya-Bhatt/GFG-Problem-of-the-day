//   https://www.geeksforgeeks.org/problems/find-the-n-th-character5925/1




class Solution {
    //Function to find the nth character in the given string with given values of R and N.
    nthCharacter(s, r, n) {
        //your code here
        
        let oddCnt = 0;
        while (r > 0) {
          oddCnt += n % 2;
          n = Math.floor(n / 2);
          r--;
        }
        if (oddCnt % 2 === 0) return s[n];
        else return s[n] === '0' ? '1' : '0';
  

        
    }
}