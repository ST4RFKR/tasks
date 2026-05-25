function countDuplicates(arr) {
    let counter = 0;

    for (let left = 0; left < arr.length; left++) {
        let right = left + 1;
        if (arr[left] === arr[right]) {
            counter++
        }

    }
    return counter
}

console.log(countDuplicates([0, 1, 2, 2, 3, 7, 7, 10])); // 2
console.log(countDuplicates([0, 0, 1, 1, 2, 2, 3, 3])); // 4
console.log(countDuplicates([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // 0