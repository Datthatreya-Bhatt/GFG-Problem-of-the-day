#      https://www.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1


class Solution:
    def delete_node(self, head, x):
        if x == 1:
            return head.next
        current = head
        previous = None
        while x > 1:
            previous = current
            current = current.next
            x -= 1
        if current.next:
            current.next.prev = previous
        if previous:
            previous.next = current.next
        return head
        #code here
