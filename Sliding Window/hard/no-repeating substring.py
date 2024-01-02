def no_repeating_substring(str):
    slider_start = 0
    max_length = 0
    hash_map = {}
    for pointer in range(len(str)):
        if str[pointer] in hash_map:
            slider_start = max(slider_start, hash_map[str[pointer]] + 1)
            # print(slider_start)
        hash_map[str[pointer]] = pointer

        max_length = max(max_length, pointer -  slider_start + 1)
    
    return max_length


no_repeating_substring('aabccbb')
no_repeating_substring('abbbb')
no_repeating_substring('abcabcbb')
no_repeating_substring('pwwkew')


# Leetcode Link: https://leetcode.com/problems/longest-substring-without-repeating-characters

# Runtime: 127 ms, faster than 18.18% of Python3 online submissions for Longest Substring Without Repeating Characters.
# Memory Usage: 17.3 MB, less than 15.76% of Python3 online submissions for Longest Substring Without Repeating