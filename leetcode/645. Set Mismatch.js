var findErrorNums = function (nums) {
    let arr = new Array(nums.length + 1).fill(0);
    let duplicate = -1;
    let missing = -1;

    // Считаем количество каждого числа
    for (let num of nums) {
        arr[num]++;
    }

    // Ищем дубликат и пропущенное число
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 2) {
            duplicate = i;
        } else if (arr[i] === 0) {
            missing = i;
        }
    }

    return [duplicate, missing];
};