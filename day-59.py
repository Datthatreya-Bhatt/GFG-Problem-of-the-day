# https://www.geeksforgeeks.org/problems/subtraction-in-linked-list/1



class Solution:
    def subLinkedList(self, l1, l2): 
        # Code here
        # return head of difference list
        
        node = l1
        n=""
        while(node!=None):
            n+=str(node.data)
            node = node.next
        m=""
        node=l2
        while(node!=None):
            m+=str(node.data)
            node = node.next
        b = int(m)
        a = int(n)
        n = str(b-a)
        if b<a:
            n=str(a-b)
        node = Node(int(n[0]))
        head=node
        for i in range(1, len(n)):
            temp = Node(int(n[i]))
            head.next = temp
            head=temp
            
        return node


