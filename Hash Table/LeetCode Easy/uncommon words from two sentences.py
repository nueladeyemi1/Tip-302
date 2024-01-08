class Solution:
    def uncommonFromSentences(s1, s2):
        s1_array = s1.split(' ')
        s2_array = s2.split(' ')
        collector = []
        hash_map = {}
        
        
        
        for i in range(len(s1_array)):
            if s1_array[i] not in hash_map:
                hash_map[s1_array[i]] = 0
            hash_map[s1_array[i]] += 1
            
            
        for j in range(len(s2_array)):
            if s2_array[j] not in hash_map:
                hash_map[s2_array[j]] = 0
            hash_map[s2_array[j]] += 1
        

        for val in hash_map:
            if hash_map[val] == 1:
                collector.append(val)
            

            
        return collector


# Runtime: 42 ms, faster than 40.38% of Python3 online submissions for Uncommon Words from Two Sentences.
# Memory Usage: 17.5 MB, less than 11.30% of Python3 online submissions for Uncommon Words from Two Sentences.

# https://leetcode.com/problems/uncommon-words-from-two-sentences