// https://www.geeksforgeeks.org/problems/good-by-2023/1


class Solution {
    /**
    * @param {number} N
    * @param {number[]} coins
    * @returns {boolean}
    */
    
isPossible(N, coins) {
   function helper(i,s){
    if(s>0 && (s%20 === 0 || s%24 === 0 || s === 2024)){
        return 1;
    }
    if(i >= N){
        return 0;
    }
    return helper(i+1, s+coins[i]) || helper(i+1, s);
   }
    return helper(0,0);

}
}