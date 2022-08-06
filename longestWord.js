const findLongestWord = arr => arr.sort((a,b) => b.length - a.length)[0].length


//The runtime of .sort() is O(nlog(n)).
//The runtime of accessing an element by index is O(1).
//The runtime of .length is O(1).
//nlog(n) + 1 + 1 = nlog(n) + 2
//So, the runtime of this function is O(nlog(n))