//  https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1



findUnion(arr1, arr2, n, m)
    {
    

        let a = 0;
        let b = 0;
        
        let out = [];
        
        
        while(a < arr1.length || b < arr2.length){
        	if(arr1[a] === arr2[b] && out[out.length-1] != arr1[a]){
        		out.push(arr1[a]);
        		a++;
        		b++;
        	}
        	else if(arr1[a] > arr2[b] && out[out.length-1] != arr2[b]){
        		out.push(arr2[b]);
        		b++;
        	}
        	else if(arr1[a] < arr2[b] && out[out.length-1] != arr1[a]){
        		out.push(arr1[a]);
        		a++;
        	}
        
        	while(arr1[a] === out[out.length-1]){
        		// console.log('a')
        		a++;
        	}
        	// console.log(arr2[b])
        	while(arr2[b] === out[out.length-1]){
        		// console.log('b')
        
        		b++;
        	}
        
        	if(a >= arr1.length){
        		while(b < arr2.length){
        		    if(out[out.length-1] === arr2[b]){
        		        b++;
        		        continue;
        		    }
        			out.push(arr2[b]);
        			b++;
        		}
        	}
        
        	if(b >= arr2.length){
        		while(a < arr1.length){
        		    if(out[out.length-1] === arr1[a]){
        		        a++;
        		        continue;
        		    }
        			out.push(arr1[a]);
        			a++;
        		}
        	}
        	
        
        }
        return out;

    }