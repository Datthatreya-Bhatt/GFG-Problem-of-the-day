//  https://www.geeksforgeeks.org/problems/insertion-sort-for-singly-linked-list/1




class Solution {
    insertionSort(head) {
        if (!head || !head.next) {
            return head;
        }

        let sorted = null;
        let current = head;

        while (current) {
            const next = current.next;
            sorted = this.sortedInsert(sorted, current);
            current = next;
        }

        return sorted;
    }

    sortedInsert(sorted, newNode) {
        if (!sorted || sorted.data >= newNode.data) {
            newNode.next = sorted;
            sorted = newNode;
        } else {
            let current = sorted;
            while (current.next && current.next.data < newNode.data) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }

        return sorted;
    }
}