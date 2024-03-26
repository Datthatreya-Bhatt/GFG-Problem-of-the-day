//  https://www.geeksforgeeks.org/problems/additive-sequence/1



class Solution {
    isAdditiveSequence(num) {
      function isValidSequence(num1, num2, remaining) {
        if (!remaining) {
          return true;
        }
        const sumNum = String(num1 + num2);
        if (remaining.startsWith(sumNum)) {
          return isValidSequence(num2, parseInt(sumNum), remaining.slice(sumNum.length));
        }
        return false;
      }
  
      const length = num.length;
      for (let i = 1; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
          const num1 = parseInt(num.slice(0, i));
          const num2 = parseInt(num.slice(i, j));
          if (isValidSequence(num1, num2, num.slice(j))) {
            return 1;
          }
        }
      }
      return 0;
    }
  }
  