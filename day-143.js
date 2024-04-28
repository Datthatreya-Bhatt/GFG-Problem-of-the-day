//  https://www.geeksforgeeks.org/problems/delete-middle-of-linked-list/1




class Solution {
    deleteMid(node) {
        /*
        head: head of given linkedList
        return: head of resultant llist
        */

        // code here

        let slow = node;
        let fast = node.next;

        while (fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;

        return node;
    }
}
