//      https://www.geeksforgeeks.org/problems/you-and-your-books/1




class Solution{
    max_Books(arr,n,k){
        //code here
        let ans = 0;
        let temp = 0;
        
        for(let i= 0; i<n; i++){
            if(arr[i] <= k){
                temp+=arr[i];
                ans = Math.max(temp, ans)
            }
            else{
                temp = 0;
            }
        }
        return ans;
    }
}