//      https://www.geeksforgeeks.org/problems/nuts-and-bolts-problem0431/1




class Solution {
    matchPairs(n, nuts, bolts) {
      const p = ['!', '#', '$', '%', '&', '*', '?', '@', '^'];
    
      const order_dict = p.reduce((acc, char, i) => {
        acc[char] = i;
        return acc;
      }, {});
    
      nuts.sort((a, b) => order_dict[a] - order_dict[b]);
      bolts.sort((a, b) => order_dict[a] - order_dict[b]);
    
      return [nuts, bolts];
    }

}
