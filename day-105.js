//  https://www.geeksforgeeks.org/problems/zigzag-tree-traversal/1





class Solution 
{
    //Function to store the zig zag order traversal of tree in a list.
    zigZagTraversal(root) {
        let dic = {};
        let m = 0;
    
        function f(r, l) {
            if (!r) return;
            m = Math.max(m, l);
            if (!dic[l]) dic[l] = [];
            dic[l].push(r.data);
            f(r.left, l + 1);
            f(r.right, l + 1);
        }
    
        f(root, 0);
        let a = [];
        for (let i = 0; i <= m; i++) {
            if (i % 2 === 0) {
                a = a.concat(dic[i]);
            } else {
                a = a.concat(dic[i].reverse());
            }
        }
        return a;
    }

}