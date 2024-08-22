#       https://www.geeksforgeeks.org/problems/alien-dictionary/1




from typing import List

class Solution:
    def findOrder(self, alien_dict: List[str], N: int, K: int) -> str:
        from collections import defaultdict
        adjacency_list = defaultdict(set) 
        in_degree = defaultdict(int)       
        characters = set()                 
        
        for index, current_word in enumerate(alien_dict):
            if index + 1 == N:
                continue
            current_chars = list(current_word)              
            next_chars = list(alien_dict[index + 1])      
            characters.update(current_chars + next_chars)
            for a, b in zip(current_chars, next_chars):
                if a == b:
                    continue
                if b not in adjacency_list[a]:
                    in_degree[b] += 1
                    adjacency_list[a].add(b)
                break
        
        queue = []
        for c in characters:
            if in_degree[c] == 0:
                queue.append(c)
        
        result = []
        while queue:
            current_char = queue.pop()  
            result.append(current_char)
            for next_char in adjacency_list[current_char]: 
                in_degree[next_char] -= 1
                if in_degree[next_char] == 0:
                    queue.append(next_char)
        
        return result
     # Your implementation here
