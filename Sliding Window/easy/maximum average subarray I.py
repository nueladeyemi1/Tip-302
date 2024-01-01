import math

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        slider_start = 0
        # max_sum = -1
        max_sum = -math.inf
        sum = 0
        
        for right_slider in range(len(nums)):
            sum += (nums[right_slider])
            if right_slider >= k - 1:
                max_sum = max(sum/k, max_sum)
                sum -= nums[slider_start]
                slider_start += 1
                
        return max_sum
        