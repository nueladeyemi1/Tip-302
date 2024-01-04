class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        max_count = 0
        
        for i in range(2, len(s)):
            if s[i] != s[i-1] and s[i] != s[i-2] and s[i-1] != s[i-2]:
                max_count += 1
                
        return max_count
                


# https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters

# Runtime: 38 ms, faster than 72.56% of Python3 online submissions for Substrings of Size Three with Distinct Characters.
# Memory Usage: 17.5 MB, less than 6.19% of Python3 online submissions for Substrings of Size Three with Distinct Characters.