class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        hash_map = {}
        slider_start = 0
        max_length = 0
        
        for pointer in range(len(s)):
            if s[pointer] in hash_map:
                slider_start = max(slider_start, hash_map[s[pointer]] + 1)
            hash_map[s[pointer]] = pointer
            
            max_length = max(max_length, pointer - slider_start + 1)
            
        return max_length
        


# Leetcode Link: https://leetcode.com/problems/longest-substring-without-repeating-characters

# Runtime: 127 ms, faster than 18.18% of Python3 online submissions for Longest Substring Without Repeating Characters.
# Memory Usage: 17.3 MB, less than 15.76% of Python3 online submissions for Longest Substring Without Repeating