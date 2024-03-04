// https://www.geeksforgeeks.org/problems/need-some-change/1




class Solution {
    /**
    * @param number n
    * @param number[] arr
    
    * @returns none
    */
        swapElements(n, arr) {
            // code here
            
       
            
            for(let i=0; i<n; i++){
                if(arr[i+2] !== undefined){
                    let temp = arr[i];
                    arr[i] = arr[i+2];
                    arr[i+2] = temp;
                    
                }
            }
            
            
            return arr;
            
        }
    }