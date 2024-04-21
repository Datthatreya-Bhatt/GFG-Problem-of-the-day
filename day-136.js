//  https://www.geeksforgeeks.org/problems/three-way-partitioning/1




class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    threeWayPartition(arr, a, b)
    {
        //your code here
                
        let n = arr.length;
        
        let low = 0;
        let mid = 0; 
        let high = n-1;
        
        while(mid <= high){
        
        	if(arr[mid] < a){
        		let temp = arr[low];
        		arr[low] = arr[mid];
        		arr[mid] = temp;
        		low++;
        		mid++; 
        	}
        	else if(arr[mid] > b){
        		let temp = arr[high];
        		arr[high] = arr[mid];
        		arr[mid] = temp;
        		high--;
        
        	}
        	else{
        		mid++;
        	}
}
        
        

    }
}