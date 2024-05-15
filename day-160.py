#       https://www.geeksforgeeks.org/problems/account-merge/1





class DisjointSet:
    def __init__(self, num_accounts):
        self.parent = [i for i in range(num_accounts)]
        self.size = [1] * num_accounts

    def find_parent(self, node):
        if self.parent[node] != node:
            self.parent[node] = self.find_parent(self.parent[node])
        return self.parent[node]

    def union_by_size(self, account1, account2):
        parent1 = self.find_parent(account1)
        parent2 = self.find_parent(account2)

        if parent1 == parent2:
            return

        if self.size[parent1] < self.size[parent2]:
            self.parent[parent1] = parent2
            self.size[parent2] += self.size[parent1]
        else:
            self.parent[parent2] = parent1
            self.size[parent1] += self.size[parent2]


class Solution:
    def accountsMerge(self, accounts):
        num_accounts = len(accounts)
        disjoint_set = DisjointSet(num_accounts)

        merge_email_node = {}

        for i in range(num_accounts):
            for j in range(1, len(accounts[i])):
                email = accounts[i][j]

                if email not in merge_email_node:
                    merge_email_node[email] = i
                else:
                    disjoint_set.union_by_size(merge_email_node[email], i)

        merge_email = {}
        for email, node in merge_email_node.items():
            root_node = disjoint_set.find_parent(node)
            if root_node not in merge_email:
                merge_email[root_node] = []
            merge_email[root_node].append(email)

        merged_accounts = []
        for i in range(num_accounts):
            if i not in merge_email:
                continue
            merge_email[i].sort()
            name = accounts[i][0]
            merged_account = [name] + merge_email[i]
            merged_accounts.append(merged_account)

        return merged_accounts

        # Code here