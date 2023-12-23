//https://www.geeksforgeeks.org/problems/count-element-occurences/1



class Solution
{
    //Function to find all elements in array that appear more than n/k times.
    countOccurence(arr, n, k)
    {
        //your code here
        let max = Math.floor(n/k);
        let map = new Map();
        
        for(let i=0; i<n; i++){
            if(map.has(arr[i])){
                map.set(arr[i], map.get(arr[i])+1);
            }
            else{
                map.set(arr[i], 1);
            }
        }
        
        let count = 0;
        
        for(let val of map){
            if(val[1] > max){
                count++;
            }
        }
        
        return count;
    }
}