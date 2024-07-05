//      https://www.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1



class Solution {
    /**
    * @param Node root

    * @returns none
    */
    populateNext(root) {
        let prev = null;

        function inorder(node) {
            if (!node) {
                return;
            }

            inorder(node.left);

            if (prev !== null) {
                prev.next = node;
            }

            prev = node;

            inorder(node.right);
        }

        inorder(root);
    }
}



