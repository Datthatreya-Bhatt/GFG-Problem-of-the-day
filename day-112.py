#   https://www.geeksforgeeks.org/problems/city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/1




from typing import List
from collections import defaultdict
import heapq

class Solution:
    def findCity(self, numCities: int, numEdges: int, edges: List[List[int]], distanceThreshold: int) -> int:
        adj = defaultdict(list)
        for e in edges:
            adj[e[0]].append([e[1], e[2]])
            adj[e[1]].append([e[0], e[2]])
        
        def dijkstras(start, adj, threshold):
            distCount = 0
            queue = []
            visited = {}
            for i in adj[start]:
                heapq.heappush(queue, i[::-1])
            visited[start] = True
            while queue:
                q = heapq.heappop(queue)
                if q[1] in visited:
                    continue
                visited[q[1]] = True
                if q[0] > threshold:
                    return distCount
                distCount += 1
                for i in adj[q[1]]:
                    if i[0] not in visited:
                        heapq.heappush(queue, [i[1] + q[0], i[0]])
                
            return distCount
  
        shortDistances = []
        
        for i in range(numCities):
            shortDistances.append([dijkstras(i, adj, distanceThreshold), i])
            
        shortDistances = sorted(shortDistances)
        i = 0
        while i < len(shortDistances) - 1:
            if shortDistances[i][0] == shortDistances[i+1][0]:
                i += 1
            else:
                return shortDistances[i][1]
        return shortDistances[i][1]
      # code here

