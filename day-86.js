//  https://www.geeksforgeeks.org/problems/first-element-to-occur-k-times5150/1



class Solution{
    firstElementKTime(n, k, arr){
        //code here
        let map = new Map();
        
        for(let i=0; i<n; i++){
            if(map.has(arr[i])){
                map.set(arr[i], map.get(arr[i])+1);
                
                let num = map.get(arr[i]);
                
                if(num === k){
                    return arr[i]
                }
                
            }
            else{
                map.set(arr[i], 1);
            }
        }
        
        return -1;
    }
}

