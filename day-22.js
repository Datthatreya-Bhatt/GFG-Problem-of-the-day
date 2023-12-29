//https://www.geeksforgeeks.org/problems/check-if-a-string-is-repetition-of-its-substring-of-k-length3302/1


class Solution {
    //Function to find the kth string
    kSubstrConcat(n, s, k) {
        // Checking if n is divisible by k
       
        if (n % k != 0)   return 0;

          
        let map = new Map();
        let i = 0
        let j = k
        while (i< s.length){
            let temp = s.substring(i, j);
            if (map.has(temp)){
                map.set(temp, map.get(temp)+1);
            }
                
            else{
                map.set(temp, 1);

            }
            i +=k
            j +=k
        }


        if (map.size > 2){
            return 0
        }
        return 1
    }
}
