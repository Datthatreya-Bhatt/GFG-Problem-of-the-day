// https://geeksforgeeks.org/problems/shortest-prime-path--141631/1



class Solution {
    
    isPrime(n) {
       if (n <= 1) {
           return false;
       }
       for (let i = 2; i <= Math.sqrt(n); i++) {
           if (n % i === 0) {
               return false;
           }
       }
       return true;
   }

   solve(Num1, Num2) {
       let str1 = Num1.toString();
       let str2 = Num2.toString();
       let vis = new Array(10000).fill(0);
       let q = [];
       q.push([str1, 0]);
       while (q.length > 0) {
           let [str, steps] = q.shift();
           if (str === str2) {
               return steps;
           }
           for (let i = 0; i < str.length; i++) {
               let ch = str[i];
               for (let j = 0; j < 10; j++) {
                   if (i === 0 && j === 0) {
                       continue;
                   }
                   str = str.substring(0, i) + j + str.substring(i + 1);
                   let n = parseInt(str);
                   if (this.isPrime(n) && !vis[n]) {
                       q.push([str, steps + 1]);
                       vis[n] = 1;
                   }
                   str = str.substring(0, i) + ch + str.substring(i + 1);
               }
           }
       }
       return -1;
   }
}