//      https://www.geeksforgeeks.org/problems/print-bracket-number4058/1




class Solution {
    bracketNumbers(str) {
        // code here
        let stack = [];
        let out = [];
        let n = str.length;
        let pointer = 1;
        
        for(let i=0; i<n; i++){
            if(str[i] === '('){
                stack.push(pointer);
                out.push(pointer);
                pointer++;
            }
            else if(str[i] === ')'){
                out.push( stack[stack.length-1]);
                stack.pop();
                
            }
            
        }
        
        return out;
        
    }
    
}