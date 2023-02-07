public Pair void twoSum (int [] a, int target) {
    int start = 0, end = a.length-1;
    while (start < end) {
        int sum = a[start] + a[end];
        if (sum < target) start++;
        else if (sum > target) end--;
        else return new Pair (start, end);
    }
    return null;
}