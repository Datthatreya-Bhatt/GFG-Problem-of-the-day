#       https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1


class Solution:
    
    #Function to find the maximum profit and the number of jobs done.
    def JobScheduling(self, jobs, n):
            
            sorted_jobs = sorted(jobs, key=lambda x: x.profit, reverse=True)
            
            timeline = [-1] * n
            total_profit, job_count = 0, 0
            
            for job in sorted_jobs:
                
                idx = job.deadline - 1
                
                while idx >= 0 and timeline[idx] != -1:
                    idx -= 1
                
                if idx >= 0:
                    timeline[idx] = job.id
                    total_profit += job.profit
                    job_count += 1
                    
            return [job_count, total_profit]
            # code here

