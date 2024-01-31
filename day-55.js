// https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1



class Solution {
    // Function to insert a string into the Trie
    insert(root, key) {
        for (let i = 0; i < key.length; i++) {
            // Calculate the index of the current character in the children array
            const index = key.charCodeAt(i) - 'a'.charCodeAt(0);
            
            // If the child node for the current character doesn't exist, create a new node
            if (!root.children[index]) {
                root.children[index] = new TrieNode();
            }
            
            // Move to the next level in the Trie
            root = root.children[index];
        }
        
        // Mark the last node as the end of the inserted word
        root.isEndOfWord = true;
    }

    // Function to search for a string in the Trie
    search(root, key) {
        for (let i = 0; i < key.length; i++) {
            // Calculate the index of the current character in the children array
            const index = key.charCodeAt(i) - 'a'.charCodeAt(0);
            
            // If the child node for the current character doesn't exist, the word is not present
            if (!root.children[index]) {
                return false;
            }
            
            // Move to the next level in the Trie
            root = root.children[index];
        }
        
        // If the end of the word flag is true, the word is present in the Trie
        return root.isEndOfWord;
    }
}