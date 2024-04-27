//  https://www.geeksforgeeks.org/problems/merge-sort-on-doubly-linked-list/1







class Solution {
    //Function to sort the given doubly linked list using Merge Sort.
    sortDoubly(head) {
    function mergesort(sta = head) {
      if (!sta.next) {
        return sta;
      }
      let slow = sta;
      let fast = sta;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      const mid = slow;
      mid.prev.next = null;
      mid.prev = null;
      let left = mergesort(sta);
      let right = mergesort(mid);
      let dummy = new Node(null);
      let cur = dummy;
      while (left || right) {
        if (left && right) {
          if (left.data <= right.data) {
            cur.next = left;
            left.prev = cur;
            left = left.next;
          } else {
            cur.next = right;
            right.prev = cur;
            right = right.next;
          }
        } else if (left) {
          cur.next = left;
          left.prev = cur;
          left = null;
        } else if (right) {
          cur.next = right;
          right.prev = cur;
          right = null;
        }
        cur = cur.next;
      }
      dummy.next.prev = null;
      return dummy.next;
    }
    return mergesort();
  }

}
