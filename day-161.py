#       https://www.geeksforgeeks.org/problems/divisibility-tree1902/1




from typing import List

class Solution:
    def depth_first_search(self, adjacency_list: List[List[int]], current_vertex: int, parent_vertex: int, answer: List[int]) -> int:
        count = 0
        for adjacent_vertex in adjacency_list[current_vertex]:
            if adjacent_vertex != parent_vertex:
                x = self.depth_first_search(adjacency_list, adjacent_vertex, current_vertex, answer)
                if x % 2 == 0:
                    answer[0] += 1
                else:
                    count += x
        return count + 1

    def minimumEdgeRemove(self, num_vertices: int, edges: List[List[int]]) -> int:
        adjacency_list = [[] for _ in range(num_vertices)]
        for edge in edges:
            adjacency_list[edge[1] - 1].append(edge[0] - 1)
            adjacency_list[edge[0] - 1].append(edge[1] - 1)

        answer = [0]
        self.depth_first_search(adjacency_list, 0, -1, answer)
        return answer[0]
       # code here
        
