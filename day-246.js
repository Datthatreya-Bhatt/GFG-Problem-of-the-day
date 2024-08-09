//      https://www.geeksforgeeks.org/problems/maximize-arrii-of-an-array0026/1




class Solution {
    
    Maximize(arr) {
        // code here
        const myMod = Math.pow(10, 9) + 7
        arr.sort((a,b)=>a - b)
        
        let ans = 0
        for(let i = 0; i< arr.length; i++){
            const mul = (arr[i] * i) % myMod
            ans = (ans + mul) % myMod
        }
        
        return ans
    }


}
