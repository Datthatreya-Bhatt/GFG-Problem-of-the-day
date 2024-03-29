//  https://www.geeksforgeeks.org/problems/euler-circuit-in-a-directed-graph/1



class Solution {
    isEularCircuitExist(v, adj){
       //code here
       return adj.every(v_adj => v_adj.length % 2 === 0);
    }
}
