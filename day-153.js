//      https://www.geeksforgeeks.org/problems/root-to-leaf-paths/1



class Solution {
    /**
    * @param Node root
    
    * @returns number[][]
    */
        Paths(root) {
            let paths = [];
        
            function generate_paths(node, current_path) {
              if (node.left) {
                generate_paths(node.left, current_path.concat(node.data));
              }
              if (node.right) {
                generate_paths(node.right, current_path.concat(node.data));
              }
              if (!node.left && !node.right) {
                paths.push(current_path.concat(node.data));
              }
            }
        
            if (root) {
              generate_paths(root, []);
            }
            return paths;
        }
    }