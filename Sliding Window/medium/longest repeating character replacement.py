class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        slider_start = 0
        max_length = 0
        max_replacement = 0
        hash_map = {}
        
        for pointer in range(len(s)):
            if s[pointer] not in hash_map:
                hash_map[s[pointer]] = 0
            hash_map[s[pointer]] += 1
            max_replacement = max(max_replacement, hash_map[s[pointer]])
            
            if(pointer - slider_start + 1 - max_replacement) > k:
                hash_map[s[slider_start]] -= 1
                slider_start += 1
                
            max_length = max(max_length, pointer - slider_start + 1)
            
        return max_length
    


# https://leetcode.com/problems/longest-repeating-character-replacement

# Runtime: 78 ms, faster than 93.39% of Python3 online submissions for Longest Repeating Character Replacement.
# Memory Usage: 17.4 MB, less than 15.31% of Python3 online submissions for Longest Repeating Character Replacement.

# ALTERNATIVE

def characterReplacementIII(nums, k):
    left_slider = 0
    max_count = 0
    for right_slider, num in enumerate(nums):
        k -= 1 - num
        if k < 0:
            k  += 1 - nums[left_slider]
            left_slider += 1
        max_count = max(max_count, right_slider - left_slider + 1)

    print(max_count)
    return max_count



characterReplacementIII([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)