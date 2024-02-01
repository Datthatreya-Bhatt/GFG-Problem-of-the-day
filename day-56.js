//  https://geeksforgeeks.org/problems/pangram-checking-1587115620/1


class Solution
{
    //Function to check if a string is Pangram or not.
    checkPangram(s)
    {
        // code here
        
        let n = s.length;
        if(n < 26) return false;
        
        s = s.toLowerCase();
       let alpha = {
            'a':0, 'b':1, 'c':2, 'd':3, 'e':4, 'f':5, 'g':6, 'h':7, 'i':8, 'j':9, 'k':10, 'l':11, 'm':12, 'n':13, 'o':14, 'p':15, 'q':16, 'r':17, 's':18, 't':19, 'u':20, 'v':21, 'w':22, 'x':23, 'y':24, 'z':25
        }
        
        let num = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        for(let i=0; i<n; i++){
            if(s[i] in alpha){
                num[alpha[s[i]]] = 1;
            }
        }
        
        let total = 0;
        
        for(let i=0; i<26; i++){
            total+=num[i]
        }
        
        return total === 26;
    }
}


