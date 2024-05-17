//      https://www.geeksforgeeks.org/problems/find-pair-given-difference1559/1





class Solution {
    /**
    * @param number n
    * @param number x
    * @param number[] arr

    * @returns number
    */
    findPair(n, x, arr) {
        
        arr.sort((a,b)=> a-b);
        
        let i=0,j=1;
        
        while (i < n && j < n){
            
            let ans = Math.abs(arr[i]-arr[j]);
            
            if (ans === x) return 1
            
            else if (ans > x) i++;
            
            else j++;
        }
        
        return -1
        
    }

}   




