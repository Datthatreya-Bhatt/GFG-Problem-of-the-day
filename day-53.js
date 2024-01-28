// https://www.geeksforgeeks.org/problems/count-digit-groupings-of-a-number1520/1


class Solution {
    //Function to count the total number of times digit 1 appears 
	//in the numbers from 0 to n.
      TotalCount(s) {
  let dp = new Map();

  function f(ind, val) {
    if (ind >= s.length) {
      return 1;
    }
    if (dp.has(`${ind}-${val}`)) {
      return dp.get(`${ind}-${val}`);
    }
    let cnt = 0;
    let curr = 0;
    for (let i = ind; i < s.length; i++) {
      curr += parseInt(s[i]);
      let v = parseInt(curr);
      if (v >= val) {
        cnt += f(i + 1, v);
      }
    }
    dp.set(`${ind}-${val}`, cnt);
    return cnt;
  }

  return f(0, 0);
}


}