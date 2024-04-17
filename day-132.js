//  https://www.geeksforgeeks.org/problems/count-pairs-in-an-array4145/1



class Solution {
    constructor() {
        this.ans = 0;
        this.v = [];
        this.tv = [];
    }
    
    csort(l, r) {
        if (l >= r) {
            return;
        }
        
        let m = Math.floor((r + l) / 2);
        this.csort(l, m);
        this.csort(m + 1, r);
        
        for (let i = l; i <= r; i++) {
            this.tv[i] = this.v[i];
        }
        
        let li = l;
        let ri = m + 1;
        let i = l;
        
        while (li <= m && ri <= r) {
            if (this.tv[li] <= this.tv[ri]) {
                this.v[i++] = this.tv[li++];
            } else {
                this.ans += m - li + 1;
                this.v[i++] = this.tv[ri++];
            }
        }
        
        while (li <= m) {
            this.v[i++] = this.tv[li++];
        }
        
        while (ri <= r) {
            this.v[i++] = this.tv[ri++];
        }
    }
    
    countPairs(arr, n) {
        this.v = new Array(n);
        this.tv = new Array(n);
        
        for (let i = 0; i < n; i++) {
            this.v[i] = arr[i] * i;
        }
        
        this.csort(0, n - 1);
        
        return this.ans;
    }
}
