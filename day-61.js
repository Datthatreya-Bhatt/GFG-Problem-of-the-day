// https://www.geeksforgeeks.org/problems/node-at-distance/1



class Solution {
    constructor() {
      this.result = 0;
    }
  
    printKDistantfromLeaf(root, k) {
      let queue = [ [root, [], 0] ];  // (node, path, distance)
      let leafPaths = [];
  
      while (queue.length > 0) {
        let [node, path, distance] = queue.shift();
  
        if (!node.left && !node.right) {
          leafPaths.push([path.concat(node), distance + 1]);
          continue;
        }
  
        if (node.left) {
          queue.push([node.left, path.concat(node), distance + 1]);
        }
  
        if (node.right) {
          queue.push([node.right, path.concat(node), distance + 1]);
        }
      }
  
      let uniqueNodes = new Set(leafPaths.filter(([path, distance]) => distance - 1 >= k).map(([path, distance]) => path[path.length - k - 1]));
      return uniqueNodes.size;
    }
  }



