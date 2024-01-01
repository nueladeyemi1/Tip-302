class Solution(object):
    def longestCommonPrefix(self, strs):
        if not strs:
            return ""
        min_s = min(strs)
        max_s = max(strs)
        print(min_s)
        if not min_s:
            return ""
        for i in range(len(min_s)):
            if max_s[i] != min_s[i]:
                return max_s[:i]
        return min_s[:]

        # prefix_counter = 0
        # longest_str = ''
        # short_str = strs[0]
        # for the_str in strs:
        #     if len(longest_str) < len(the_str):
        #         longest_str = the_str
        #     if len(short_str) > len(the_str):
        #         short_str = the_str
        # for i in range(len(short_str)):
        #     if short_str[0] == longest_str[0]:
        #         prefix_counter += 1
        
        # print(longest_str)
        # print(short_str)
        # print(prefix_counter)
            
        """
        :type strs: List[str]
        :rtype: str
        """
        


# Runtime: 14 ms, faster than 80.48% of Python online submissions for Longest Common Prefix.
# Memory Usage: 13.4 MB, less than 81.96% of Python online submissions for Longest Common Prefix.