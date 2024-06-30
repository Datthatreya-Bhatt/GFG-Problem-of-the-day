//          https://www.geeksforgeeks.org/problems/make-binary-tree/1



/**
 * @param {Node} head
 * @returns {TreeNode}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    //Function to make binary tree from linked list.
    convert(head) {
        let m = [];
        while (head) {
            m.push(new TreeNode(head.data));
            head = head.next;
        }
    
        for (let i = 0; i < m.length; i++) {
            if (2 * i + 1 < m.length) {
                m[i].left = m[2 * i + 1];
            }
            if (2 * i + 2 < m.length) {
                m[i].right = m[2 * i + 2];
            }
        }
        return m[0];
    }

}