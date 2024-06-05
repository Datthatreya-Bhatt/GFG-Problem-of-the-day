//      https://www.geeksforgeeks.org/problems/max-sum-in-the-configuration/1




class Solution {

    max_sum(a, n) {
       let total = 0;
       let sum1 = 0;
       for (let i = 0; i < n; i++) {
         sum1 += a[i] * i;
         total += a[i];
       }
       let j = n - 1;
       let maxnum = sum1;
       let i = 0;
       while (j > 0) {
         if (i === 0) {
           sum1 =
             sum1 +
             (total - (a[0] + a[n - 1])) -
             a[j] * (n - 1) +
             a[0];
           i += 1;
         } else {
           sum1 =
             sum1 +
             (total - (a[j] + a[j - 1])) -
             a[j - 1] * (n - 1) +
             a[j];
           j -= 1;
         }
         if (sum1 > maxnum) {
           maxnum = sum1;
         }
       }
       return maxnum;
     }
 
 
 }