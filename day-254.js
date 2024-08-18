//      



class Solution {
    canSplit(arr) {
        let s = arr.reduce((a, b) => a + b, 0);
        let t = 0;
        for (let i of arr) {
            s -= i;
            t += i;
            if (t === s) return true;
        }
        return false;
    }
}
