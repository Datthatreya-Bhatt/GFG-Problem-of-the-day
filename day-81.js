// https://www.geeksforgeeks.org/problems/power-set4302/1



function AllPossibleStrings(s) {
    let ret = [];
    let n = s.length;

    function collect(i, sofar = "") {
        if (sofar) {
            ret.push(sofar);
        }
        if (i >= n) {
            return;
        }

        for (let k = i; k < n; k++) {
            collect(k + 1, sofar + s[k]);
        }
    }

    collect(0);
    return ret.sort();
}
