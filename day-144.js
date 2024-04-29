//      https://www.geeksforgeeks.org/problems/remove-every-kth-node/1




class Solution {
    deleteK(head, k) {
        if (!head || k <= 0) {
            return head;
        }
        
        let array = [];
        
        while (head) {
            array.push(head.data);
            head = head.next;
        }
        
        let index = k - 1;
        while (index < array.length) {
            array.splice(index, 1);
            index += k - 1;
        }
        
        let result_list = null;
        for (let i = array.length - 1; i >= 0; i--) {
            let new_node = new Node(array[i]);
            new_node.next = result_list;
            result_list = new_node;
        }
        
        return result_list;
    }
}
