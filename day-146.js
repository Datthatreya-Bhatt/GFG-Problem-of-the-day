//      https://www.geeksforgeeks.org/problems/arrange-consonants-and-vowels/1



class Solution {
    arrangeCV(head) {
        // Initialize variables to keep track of the start and end of vowel and consonant lists
        let vowels_head = new Node(""); // Head of the vowel list
        let vowels_end = vowels_head; // End of the vowel list
        let consonants_head = new Node(""); // Head of the consonant list
        let consonants_end = consonants_head; // End of the consonant list
      
        // Traverse the linked list
        while (head) {
          let next_node = head.next; // Store the next pointer before modifying the current node's next
      
          // Check if the current node is a vowel
          if (["a", "e", "i", "o", "u"].includes(head.data)) {
            vowels_end.next = head;
            vowels_end = head;
          } else {
            consonants_end.next = head;
            consonants_end = head;
          }
      
          // Update the next pointer of the current node and move to the next node
          head.next = null;
          head = next_node;
        }
      
        // Connect the end of the vowels list to the start of the consonants list
        if (vowels_head.next) {
          vowels_end.next = consonants_head.next;
          return vowels_head.next; // Return the head of the arranged list
        }
        return consonants_head.next; // Return the head of the arranged list
      }
  }