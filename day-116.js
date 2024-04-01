//  https://www.geeksforgeeks.org/problems/pairs-violating-bst-property--212515/1




class Solution {
    /**
    * @param number n
    * @param Node root
    
    * @returns number
    */
        pairsViolatingBST(n, root) {
          let s = [];
        
          function inorder(node) {
            if (!node) {
              return;
            }
            inorder(node.left);
            s.push(node.data);
            inorder(node.right);
          }
          inorder(root);
        
          let ans = 0;
        
          function mergesort(arr) {
            if (arr.length <= 1) {
              return arr;
            }
        
            let mi = Math.floor(arr.length / 2);
            let a = mergesort(arr.slice(0, mi));
            let b = mergesort(arr.slice(mi));
            let i = 0;
            let j = 0;
            let ret = [];
        
            while (i < a.length && j < b.length) {
              if (a[i] <= b[j]) {
                ret.push(a[i]);
                i++;
              } else {
                ans += a.length - i;
                ret.push(b[j]);
                j++;
              }
            }
        
            if (i < a.length) {
              ret.push(...a.slice(i));
            }
            if (j < b.length) {
              ret.push(...b.slice(j));
            }
        
            return ret;
          }
        
          mergesort(s);
          return ans;
        }
    
    }