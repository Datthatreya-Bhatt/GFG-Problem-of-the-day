//      https://www.geeksforgeeks.org/problems/help-nobita0532/1




class Solution {
    /**
    * @param string s

    * @returns string
    */
   oddEven(s) {
      let count = new Map();
      let ans = 0;
    
      for (let i = 0; i < s.length; i++) {
        let key = s[i];
        count.set(key, (count.get(key) || 0) + 1);
      }
    
      for (let [key, value] of count) {
        if ((value & 1) === (key.charCodeAt(0) & 1)) {
          ans += 1;
        }
      }
    
      return ans & 1 ? "ODD" : "EVEN";
    }

}

