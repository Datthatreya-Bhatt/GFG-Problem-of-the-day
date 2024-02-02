// https://www.geeksforgeeks.org/problems/implement-atoi/1



class Solution {
    atoi(s){
        //code here
         
        let ans = 1;
        if (s[0] === '-') {
            ans *= -1;
            s = s.substring(1);
        }
    
        let rec = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] >= '0' && s[i] <= '9') {
                rec = (rec * 10) + (s[i] - '0');
            } else {
                return -1;
            }
        }
    
        return ans * rec || 0;
        
    }
}