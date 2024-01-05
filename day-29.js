// https://www.geeksforgeeks.org/problems/count-possible-ways-to-construct-buildings5007/1


class Solution {
    TotalWays(N) {
       let mod = 1000000007;
       let first = 4;
       let second = 9;
       let third  = 25;
        if(N==1){
            return first;
        }
        else if(N==2){
            return second;
        }
        else if(N==3){
            return third;
        }
        else {
            for(let i=4;i<=N;i++){
              
            let sum = (((2 * (second % mod) % mod) + (2 * (third % mod) % mod) - (first % mod) + mod) % mod);
     
                first = second%mod;
                second = third%mod;
                third = sum%mod;
            }
            return third;
        }
        return 0;

    }
}


