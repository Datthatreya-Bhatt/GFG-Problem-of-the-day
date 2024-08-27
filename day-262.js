//      https://www.geeksforgeeks.org/problems/maximum-difference-1587115620/1


class Solution {
    findMaxDiff(arr) {
        const ls = [];
        const stack = [0, arr[0]]; 
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] < arr[i]) {
                ls.push(arr[i - 1]);
                stack.push(arr[i]);
            } else {
                while (stack[stack.length - 1] >= arr[i]) {
                    stack.pop();
                }
                ls.push(stack[stack.length - 1]);
                stack.push(arr[i]);
            }
        }
        ls.unshift(0); 

        const rs = [];
        arr.reverse();
        const stack2 = [0, arr[0]];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] < arr[i]) {
                rs.push(arr[i - 1]);
                stack2.push(arr[i]);
            } else {
                while (stack2[stack2.length - 1] >= arr[i]) {
                    stack2.pop();
                }
                rs.push(stack2[stack2.length - 1]);
                stack2.push(arr[i]);
            }
        }
        rs.unshift(0); 
        rs.reverse();

        let diff = 0;

        for (let i = 0; i < arr.length; i++) {
            diff = Math.max(diff, Math.abs(ls[i] - rs[i]));
        }
        return diff;
    }
}
