class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        slider_start = 0
        max_length = 0
        max_replacement = 0
        for pointer in range(len(nums)):
            if nums[pointer] == 1:
                max_replacement += 1
            
            if (pointer - slider_start + 1 - max_replacement) > k:
                if nums[slider_start] == 1:
                    max_replacement -= 1
                slider_start += 1
                
            max_length = max(max_length, pointer - slider_start + 1)
            
        return max_length
    
# https://leetcode.com/problems/max-consecutive-ones-iii


# Runtime: 457 ms, faster than 87.68% of Python3 online submissions for Max Consecutive Ones III.
# Memory Usage: 17.9 MB, less than 8.38% of Python3 online submissions for Max Consecutive Ones III.