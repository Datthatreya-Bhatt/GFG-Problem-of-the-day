//      https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1



class Solution {

    rowWithMax1s(arr, n, m){
       // code here
       let max = 0;
       let out = -1;
      for(let i = 0;i<arr.length;i++){
          let count = 0;
          for(let j = arr[i].length-1;j>=0;j--){
              if(arr[i][j] === 1){
                  count++;
              }
              else{
                  break;
              }
          }
          
          if(count>max){
              out = i;
              max = count;
          }
      }
      return out;
      
      
   }
}