const addToZero = (array) => {
    for (let i = 1; i < array.length; i++) {
        if (array.includes(-array[i])) {
            return true
        }
    }
    return false
}
//The runtime of array.includes() is O(n).
//The runtime of this for-loop is O(n)
//n*n = n^2
//So, the runtime of this funciton is O(n^2).