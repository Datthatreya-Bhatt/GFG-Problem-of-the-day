//  https://www.geeksforgeeks.org/problems/word-break1352/1




class Solution {
    wordBreak(n, s, dictionary) {
       let wlth = new Map();
       for (let w of dictionary) {
         if (!wlth.has(w[w.length - 1])) {
           wlth.set(w[w.length - 1], new Set());
         }
         wlth.get(w[w.length - 1]).add(w.length);
       }
     
       let m = s.length;
     
       function dp(cur = m - 1) {
         if (cur < 0) {
           return 1;
         }
         for (let lth of wlth.get(s[cur]) || []) {
           if (dictionary.includes(s.substring(cur - lth + 1, cur + 1)) && dp(cur - lth)) {
             return 1;
           }
         }
         return 0;
       }
     
       return dp();
     }
 
 }