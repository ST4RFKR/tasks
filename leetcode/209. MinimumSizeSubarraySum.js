/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let res = Infinity;  // Переменная для хранения минимальной длины подмассива.
  // Начинаем с Infinity, чтобы любой найденный массив был меньше.

  let window_state = 0; // Сумма текущего "окна" (подмассива), которое мы рассматриваем.

  let begin = 0;        // Левая граница окна (начало подмассива).

  // Проходим по массиву с помощью переменной end — правая граница окна
  for (let end = 0; end < nums.length; end++) {
    window_state += nums[end]; // Добавляем текущий элемент в сумму окна

    // Пока сумма окна >= target, пытаемся уменьшить окно с левой стороны
    while (window_state >= target) {
      let window_size = end - begin + 1;  // Размер текущего окна
      res = Math.min(res, window_size);   // Сохраняем минимальный найденный размер

      window_state -= nums[begin];  // Убираем левый элемент из суммы, сужая окно
      begin += 1;                    // Передвигаем левую границу вправо
    }
  }

  // Если мы так и не нашли подходящий подмассив, возвращаем 0
  if (res === Infinity) {
    return 0;
  }

  // Иначе возвращаем минимальную длину подмассива
  return res;
};