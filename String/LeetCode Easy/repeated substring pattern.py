class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
#         hash_map = {}
#         for letter in str:
#             if letter not in hash_map:
#                 hash_map[letter] = 0

        return s in (s+s)[1:-1]
    

# Runtime: 33 ms, faster than 96.26% of Python3 online submissions for Repeated Substring Pattern.
# Memory Usage: 17.3 MB, less than 39.98% of Python3 online submissions for Repeated Substring Pattern.

# https://leetcode.com/problems/repeated-substring-pattern