//https://www.geeksforgeeks.org/problems/game-of-xor1541/1


class Solution {
    gameOfXor(arr, n) {
       let out = 0;
       
       for(let i=0; i<n; i++){
           let left = (i+1);
           let right = n-i;
           let product = (left*right);
           
           if(product%2 != 0) out = out^arr[i];
       }
       
       return out;
    }
}