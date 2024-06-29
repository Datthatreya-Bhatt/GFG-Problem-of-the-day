//      https://www.geeksforgeeks.org/problems/identical-linked-lists/1


class Solution {
    // Function to check whether two linked lists are identical or not.
    areIdentical(head1, head2) {
        while (head1 && head2) {
            if (head1.data !== head2.data) {
                return false;
            }
            head1 = head1.next;
            head2 = head2.next;
        }
        if (head1 || head2) {
            return false;
        }
        return true;
    }

}