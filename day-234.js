//      https://www.geeksforgeeks.org/problems/remove-duplicates3034/1



class Solution {
    removeDups(str) {
        // code here
        let map = {};
        let out = '';
        let n = str.length;
        
        for(let i=0; i<n; i++){
            map[str[i]] = map[str[i]] ? map[str[i]]+1 : 1;
            
            if(map[str[i]] === 1){
                out+=str[i];
            }
        }
        
        
        return out;
        
        
    }
}