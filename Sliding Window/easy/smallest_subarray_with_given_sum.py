import math

def smallest_subarray_with_given_sum(s, arr):
    sum = 0
    slider_start = 0
    min_val = math.inf #Assign to get large number for comparison// math.inf is a good alternative
    for slide in range(0, len(arr)):
        sum += arr[slide]
        while sum >= s:
            min_val = min(min_val, slide - slider_start + 1)
            sum -= arr[slider_start]
            slider_start += 1
            # print(sum, '/////')
        
    # print(min_val)
    return min_val

smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])
smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])
smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])






















def greatest_sum(s, arr):
    min_val = math.inf
    slider_start = 0
    sum = 0
    for ponts in range(len(arr)):
        sum += arr[ponts]

        while sum >= s:
            min_val = min(min_val, ponts - slider_start + 1)
            sum -= arr[slider_start]
            slider_start += 1

        if min_val == math.inf:
            # print(0)
            return 0
            
    # print(min_val)
    return min_val


greatest_sum(7, [2, 1, 5, 2, 3, 2])
greatest_sum(7, [2, 1, 5, 2, 8])
greatest_sum(8, [3, 4, 1, 1, 6])