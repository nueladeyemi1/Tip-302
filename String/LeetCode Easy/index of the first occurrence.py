class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        left_slider = 0
        right_slider = len(needle)

        while right_slider <= len(haystack):
            
            if haystack[left_slider : right_slider] == needle:
                return left_slider
            right_slider += 1
            left_slider += 1

        return -1
    


# Runtime: 37 ms, faster than 65.80% of Python3 online submissions for Find the Index of the First Occurrence in a String.
# Memory Usage: 17.5 MB, less than 11.54% of Python3 online submissions for Find the Index of the First Occurrence in a String.

# https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string