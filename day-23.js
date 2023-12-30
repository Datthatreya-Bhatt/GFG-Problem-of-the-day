// https://www.geeksforgeeks.org/problems/winner-of-an-election-where-votes-are-represented-as-candidate-names-1587115621/1



class Solution {
    //Function to return the name of candidate that received maximum votes.
    winner(arr, n){
        // code here
        
        let map = new Map();
        
        for(let i=0; i<n; i++){
            if(map.has(arr[i])){
                map.set(arr[i], map.get(arr[i])+1);
            }
            else{
                map.set(arr[i], 1);
            }
        }
        
        let max = 0;
        let out = '';
        
        for(let val of map){
            
            // console.log(val)
            
            if(val[1] > max){
                max = val[1];
                out = val[0];
            }
            
            if(val[1] === max && out > val[0]){
                out = val[0];
            }
            
        }
        
        return [out, max];
    }
}