const hasUniqueChars = str => new Set(str).size === str.length

//The runtume of new Set() is O(n).
//The runtime of .size and .length are O(1).
//The run time of the equivalence comparison is O(1)
//n + 1 + 1 + 1  = n + 3
//So, the runtime of this function is O(n)