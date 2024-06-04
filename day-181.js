//      https://www.geeksforgeeks.org/problems/swapping-pairs-make-sum-equal4142/1


class Solution {

    findSwapValues(a, n, b, m) {
    let suma = a.reduce((acc, curr) => acc + curr, 0);
    let sumb = b.reduce((acc, curr) => acc + curr, 0);

    if ((suma + sumb) % 2 !== 0) {
      return -1;
    }

    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);

    let i = 0;
    let j = 0;

    while (i < n && j < m) {
      let swap1 = suma - a[i] + b[j];
      let swap2 = sumb - b[j] + a[i];

      if (swap1 === swap2) {
        return 1;
      } else if (swap1 > swap2) {
        i++;
      } else {
        j++;
      }
    }

    return -1;
  }
}