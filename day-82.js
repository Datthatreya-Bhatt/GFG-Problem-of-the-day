// https://www.geeksforgeeks.org/problems/play-with-or5515/1



class Solution{
    game_with_number(arr,n){
        //code here
        for(let i=0; i<n; i++){
            if(i+1 !== undefined){
                arr[i] = arr[i] | arr[i+1];
            }
        
        }
        
        return arr;

    }
}
