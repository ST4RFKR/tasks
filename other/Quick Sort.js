const arr = [11, 22, 13, 34, 15, 26, 37, 48, 59, 210]
function QuickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)]
}

console.log(QuickSort(arr));

