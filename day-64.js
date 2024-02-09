//  https://www.geeksforgeeks.org/problems/children-sum-parent/1



class Solution {
    //Function to check whether all nodes of a tree have the value 
    //equal to the sum of their child nodes.
    constructor(){
        this.b=1;
    }
    isSum(root){
        if(root===null) return 0;
        let l=this.isSum(root.left);
        let r=this.isSum(root.right);
        if((root.left!==null || root.right!==null) && l+r!==root.data) this.b=0;
        return root.data;
    }
    isSumProperty(root)
    {
        //your code here
        this.isSum(root);
        return this.b;
    }
}