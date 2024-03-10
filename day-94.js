// https://www.geeksforgeeks.org/problems/remove-all-duplicates-from-a-given-string4321/1



class Solution {
    removeDuplicates(str){
       //code here
       let map = new Map();
       let out = '';
       
       for(let i=0; i<str.length; i++){
           if(!map.has(str[i])){
               map.set(str[i], 1);
               out+= str[i];
           }
           
       }
       
       return out;
    }
}