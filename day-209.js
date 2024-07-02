//      https://www.geeksforgeeks.org/problems/remove-all-occurences-of-duplicates-in-a-linked-list/1



class Solution {
    removeAllDuplicates(head) {
      let dic = {};
      let temp = head;
      while (temp) {
        if (!(temp.data in dic)) {
          dic[temp.data] = 1;
        } else {
          dic[temp.data] += 1;
        }
        temp = temp.next;
      }
      temp = head;
      let head2 = new Node(1);
      let temp2 = head2;
      while (temp) {
        if (dic[temp.data] <= 1) {
          let x = new Node(temp.data);
          temp2.next = x;
          temp2 = x;
        }
        temp = temp.next;
      }
      head2 = head2.next;
      return head2;
    }

}