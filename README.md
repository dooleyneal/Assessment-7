| Array           | Length | Insert   | Append   |
|-----------------|--------|----------|----------|
| tinyArray       | 10     | 42.80 µs | 101.9 µs |
| smallArray      | 100    | 60.20 µs | 110.5 µs |
| mediumArray     | 1000   | 221.1 µs | 163.3 µs |
| largeArray      | 10000  | 11.26 ms | 627.9 µs |
| extraLargeArray | 100000 | 1.225 s  | 3.614 ms |


The runtime of the doublerInsert function seems to scale roughly quadratically with the length of the array 
(O(n^2)).
The runtime of the doublerAppend function seems to scale roughly linearly with the length of the array (O(n)).

The doublerAppend function scales much better than the doublerInsert function. This can be seen with how quickly the runtime of the doublerInsert function grows. Especially take note of the largeArray and the extraLargeArray. The length of the array increases by a factor of 10, where the runtime of the doublerInsert increases by rougly a factor of 100 and the runtime of the doublerAppend roughly increases by only a factor of 5.



This disparity can explained by the array methods used in each function. 
The doublerInsert function uses the .unshift() method. This method inserts a new value to the beginning of the array, and then resigns the index of all the following values. For an array of length n, the .unshift() method will execute n operations. The for-loop in the doublerInsert function will also run n times, resulting in n^2 operations and the O(n^2) time complexity.
The doublerAppend funciton uses the .push() method. This method finds the end of the array and inserts the new value here, leaving all of the preceding values alone. For an array of length n, the .push() method will only execute 1 operation. The for-loop in the doublerAppend function will run n times, resulting in n operations and the O(n) time complexity.
