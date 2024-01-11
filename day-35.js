// https://www.geeksforgeeks.org/problems/remove-k-digits/1



class Solution {
    removeKdigits(s, k) {
         // code here
         const stack = [];
         
         for (let i = 0; i < s.length; i++) {
             const digit = parseInt(s[i]);
 
             while (k > 0 && stack.length > 0 && digit < stack[stack.length - 1]) {
                 stack.pop();
                 k--;
             }
 
             stack.push(digit);
         }
 
         // Pop remaining digits if needed
         while (k > 0) {
             stack.pop();
             k--;
         }
 
         // Construct the final result string
         let result = stack.join('');
 
         // Remove leading zeros
         result = result.replace(/^0+/, '');
 
         // Handle the case where the result is an empty string
         return result === '' ? '0' : result;
         }
 }