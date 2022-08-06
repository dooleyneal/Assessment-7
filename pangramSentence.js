const isPangram = str => new Set(str.toLowerCase().match(/[a-z]/g)).size === 26

//The runtime of .toLowerCase() is O(n).
//The runtime of .match() is O(n).
//The runtime of new Set() is O(n).
//The runtime of .size is O(1).
//The runtime of the equivalence comparison is O(1).
//n + n + n + 1 + 1 = 3*n + 2
//So, the runtime of this function is O(n). 