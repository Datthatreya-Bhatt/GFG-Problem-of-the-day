//      



class Solution {
    verticalSum(root) {
        let mapp = {};
        
        function dfs(node, pos) {
            if (!node) {
                return;
            }
            dfs(node.left, pos - 1);
            mapp[pos] = (mapp[pos] || 0) + node.data;
            dfs(node.right, pos + 1);
        }
        
        dfs(root, 0);
        
        let arr = [];
        for (let key in mapp) {
            arr.push([parseInt(key), mapp[key]]);
        }
        
        arr.sort(function(a, b) {
            return a[0] - b[0];
        });
        
        return arr.map(function(item) {
            return item[1];
        });
    }
}
