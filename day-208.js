//      https://www.geeksforgeeks.org/problems/linked-list-of-strings-forms-a-palindrome/1


class Solution {
    compute(head) {
      let s = "";
      while (head) {
        s += head.data;
        head = head.next;
      }
      return s === s.split("").reverse().join("");
    }

}