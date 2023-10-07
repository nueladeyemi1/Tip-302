def reverseStringIII(s):
    holder = ''
    for word in s.split(' '):
        word_length = len(word) - 1
        while word_length >= 0:
            holder += word[word_length]
            word_length -= 1
        holder += ' '
        
    print(holder)

reverseStringIII("Let's take Leetcode contest")
reverseStringIII("God Ding")

# while length >= 0:
#         holder += s[length]
#         length -= 1