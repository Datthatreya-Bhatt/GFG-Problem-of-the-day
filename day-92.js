//  https://www.geeksforgeeks.org/problems/check-frequencies4211/1


class Solution {
    sameFreq(s) {
        let d = new Map();
        for (let i of s) {
            if (!d.has(i)) {
                d.set(i, 1);
            } else {
                d.set(i, d.get(i) + 1);
            }
        }
        if (new Set(d.values()).size === 1) {
            return true;
        }
        let arr = [...d.values()].sort((a, b) => b - a);
        let temp = arr.slice();
        let idx = 0;
        while (idx < arr.length - 1) {
            if (arr[idx] !== arr[idx + 1]) {
                arr[idx]--;
                temp[idx + 1]--;
                break;
            }
            idx++;
        }
        let c = new Set(arr).size;
        let dSet = new Set(temp).size;
        for (let i of new Set(arr)) {
            if (i === 0) {
                c--;
            }
        }
        for (let j of new Set(temp)) {
            if (j === 0) {
                dSet--;
            }
        }
        if (c === 1 || dSet === 1) {
            return true;
        }
        return false;
    }
}