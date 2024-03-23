// https://www.geeksforgeeks.org/problems/fibonacci-series-up-to-nth-term/1



class Solution {
    /**
    * @param number n
    
    * @returns number[]
    */
        Series(n) {
            // code here
            let MOD = 10**9+7;
            
            let out = [];
            let ans = 0;
            
            while(out.length !== n+1){
                
                if(out[out.length-1] === undefined){
                    ans = 0;        
                }
                else if(out[out.length-1] === 0){
                    ans = 1;
                }
                else{
                    ans = out[out.length-1] + out[out.length-2];
                }
                
                out.push(ans % MOD);
            }
            
            return out;
        }
    }