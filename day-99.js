//   https://www.geeksforgeeks.org/problems/linked-list-that-is-sorted-alternatingly/1



class Solution {
    sort(head) {
      let p = head;
      let n = 0;
      while (p !== null) {
        n++;
        p = p.next;
      }
      let arr = new Array(n);
      let f = 0;
      let b = n - 1;
      let pt = head;
      for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
          arr[f] = pt.data;
          pt = pt.next;
          f++;
        } else {
          arr[b] = pt.data;
          pt = pt.next;
          b--;
        }
      }
      arr.sort((a, b) => a - b);
      let h = head;
      for (let i = 0; i < n; i++) {
        h.data = arr[i];
        h = h.next;
      }
      return head;
    }
  }
  