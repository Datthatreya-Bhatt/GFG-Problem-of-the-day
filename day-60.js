// https://www.geeksforgeeks.org/problems/sorted-insert-for-circular-linked-list/1




class Solution {
    // Function to insert a new node in a sorted circular linked list
    sortedInsert(head, data) {
      // Create a new node with the given data
      const newNode = new Node(data);
  
      // If the linked list is empty, make the new node the head
      if (!head) {
        newNode.next = newNode; // Point the new node to itself
        return newNode; // Return the new node as the head
      }
  
      let curr = head;
  
      // If the data is less than the head's data, insert at the beginning
      if (data < head.data) {
        // Traverse to the end of the linked list to update the last node's next
        while (curr.next !== head) {
          curr = curr.next;
        }
  
        // Update the last node's next to point to the new node
        curr.next = newNode;
        // Make the new node point to the current head
        newNode.next = head;
        // Return the new node as the new head
        return newNode;
      }
  
      // Reset current to the head
      curr = head;
  
      // Traverse the linked list to find the correct position to insert the new node
      while (curr.next !== head && curr.next.data < data) {
        curr = curr.next;
      }
  
      // Insert the new node in the appropriate position
      newNode.next = curr.next;
      curr.next = newNode;
  
      // Return the original head of the linked list
      return head;
    }
  }