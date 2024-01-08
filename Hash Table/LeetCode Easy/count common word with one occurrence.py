import collections
class Solution:
    def countWords( words1, words2):
        count = collections.Counter(words1)

        for word in words2:
          if word in count and count[word] < 2:
            count[word] -= 1
            
        return sum(value == 0 for value in count.values())
    

# Runtime: 79 ms, faster than 63.17% of Python3 online submissions for Count Common Words With One Occurrence.
# Memory Usage: 17.6 MB, less than 30.05% of Python3 online submissions for Count Common Words With One Occurrence.