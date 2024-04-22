//  https://www.geeksforgeeks.org/problems/row-with-minimum-number-of-1s5430/1



class Solution {
    //Function to find the row of first index containing 1.
    minRow(n, m, a) 
    {
        let g = [];
        for (let i of a) {
            g.push(i.reduce((acc, curr) => acc + curr, 0));
        }
        let p = Math.min(...g);
        let r = [];
        for (let j = 0; j < g.length; j++) {
            if (p === g[j]) {
                r.push(j + 1);
            }
        }
        return r[0];
    }
}