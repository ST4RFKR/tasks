/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let begin = 0;           // Левая граница окна
  let res = 0;             // Результат — максимальная длина окна
  let window_state = 0      // Счётчик нулей внутри окна (сколько нулей мы "заменили" на 1)
  let k = 1

  // Проходим по массиву правой границей окна
  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) {
      window_state += 1     // Если встречаем 0, увеличиваем счетчик нулей
    }

    // Если нулей стало больше k, сужаем окно с левой стороны
    while (window_state > k) {
      if (nums[begin] === 0) {
        window_state -= 1   // Убираем один ноль из окна
      }
      begin += 1            // Сдвигаем левую границу вправо
    }

    // После того как окно корректно (нулей ≤ k), обновляем максимальную длину
    res = Math.max(res, end - begin + 1)
  }

  return res - 1; // Возвращаем максимальную длину подмассива
};