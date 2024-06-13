//      https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1




class Solution{
    armstrongNumber(n){
        //code here
        let temp = n;
        let sum = 0;
        
        while(n>0){
            let digit = n%10;
            n = Math.floor(n/10);
            sum+= digit ** 3;
        }
        
        return sum === temp ? 'Yes' : 'No';
    
    }
}
