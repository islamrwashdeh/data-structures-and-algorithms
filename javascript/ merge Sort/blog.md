# Merge Sort

The Merge Sort algorithm is a sorting algorithm that is considered an example of the divide and conquer strategy. So, in this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner. We can think of it as a recursive algorithm that continuously splits the array in half until it cannot be further divided. This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion. If the array has multiple elements, we split the array into halves and recursively invoke the merge sort on each of the halves. Finally, when both the halves are sorted, the merge operation is applied. Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one.        



# Pseudocode :


```
if n > 1
  DECLARE mid <-- n/2
  DECLARE left <-- arr[0...mid]
  DECLARE right <-- arr[mid...n]
  // sort the left side
  Mergesort(left)
  // sort the right side
  Mergesort(right)
  // merge the sorted left and right sides together
  Merge(left, right, arr)



while i < left.length && j < right.length
    if left[i] <= right[j]
        arr[k] <-- left[i]
        i <-- i + 1
    else
        arr[k] <-- right[j]
        j <-- j + 1

    k <-- k + 1

if i = left.length
   set remaining entries in arr to remaining values in right
else
   set remaining entries in arr to remaining values in left

   ```




   Trace

    Sample Array: [8,4,23,42,16,15] Correct Output: [4,8,15,16,23,42]

