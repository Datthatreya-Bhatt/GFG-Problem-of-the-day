//      https://www.geeksforgeeks.org/problems/rotate-a-linked-list/1



class Solution {
    // Function to rotate a linked list.
    rotate(head, k) {
        let temp = head;
        let list = [];
        while (temp !== null) {
            list.push(temp.data);
            temp = temp.next;
        }
        let list1 = [];
        for (let i = k; i < list.length; i++) {
            list1.push(list[i]);
        }
        list1 = list1.concat(list);
        let new_k = list.length;
        let new_list = new Node(list1[0]);
        let head1 = new_list;
        let j = 0;
        while (j < new_k) {
            new_list.next = new Node(list1[j]);
            new_list = new_list.next;
            j += 1;
        }
        return head1.next;
    }
}
