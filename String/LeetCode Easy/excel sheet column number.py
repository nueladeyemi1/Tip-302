class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        ans = 0

        for c in columnTitle:
          ans = ans * 26 + ord(c) - ord('@')

        return ans
    


# https://leetcode.com/problems/excel-sheet-column-number

# Runtime: 37 ms, faster than 74.67% of Python3 online submissions for Excel Sheet Column Number.
# Memory Usage: 17.1 MB, less than 32.68% of Python3 online submissions for Excel Sheet Column Number.