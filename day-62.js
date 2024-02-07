// https://www.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1


class Solution {
    findDist(root, nodeVal1, nodeVal2) {
        const distanceToNode = (node, target) => {
            if (!node) {
                return -1;
            }
            if (node.data === target) {
                return 0;
            }

            const leftDistance = distanceToNode(node.left, target);
            const rightDistance = distanceToNode(node.right, target);

            if (leftDistance >= 0) {
                return leftDistance + 1;
            }
            if (rightDistance >= 0) {
                return rightDistance + 1;
            }

            return -1;
        };

        const lowestCommonAncestor = (node, nodeVal1, nodeVal2) => {
            if (!node) {
                return null;
            }
            if (node.data === nodeVal1 || node.data === nodeVal2) {
                return node;
            }

            const leftLCA = lowestCommonAncestor(node.left, nodeVal1, nodeVal2);
            const rightLCA = lowestCommonAncestor(node.right, nodeVal1, nodeVal2);

            if (leftLCA && rightLCA) {
                return node;
            }
            return leftLCA ? leftLCA : rightLCA;
        };

        const lcaNode = lowestCommonAncestor(root, nodeVal1, nodeVal2);
        return distanceToNode(lcaNode, nodeVal1) + distanceToNode(lcaNode, nodeVal2);
    }
}
