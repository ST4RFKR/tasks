/**
 * Находит максимальное количество фруктов, которые можно собрать,
 * где можно иметь не более 2 типов фруктов.
 * @param {number[]} fruits - Массив деревьев с разными типами фруктов
 * @return {number} - Максимальное количество фруктов (длина самого длинного подмассива с ≤ 2 типами)
 */
var totalFruit = function (fruits) {
  let left = 0;                   // Левая граница окна
  let maxFruits = 0;              // Хранит максимальное количество фруктов
  const fruitMap = new Map();      // Map для отслеживания типов фруктов в окне

  // Расширяем окно, двигая правую границу
  for (let right = 0; right < fruits.length; right++) {
    const currentFruit = fruits[right];

    // Добавляем текущий фрукт в Map (или увеличиваем счетчик)
    fruitMap.set(currentFruit, (fruitMap.get(currentFruit) || 0) + 1);

    // Если у нас больше 2 типов фруктов, сужаем окно слева
    while (fruitMap.size > 2) {
      const leftFruit = fruits[left];

      // Уменьшаем счетчик фрукта на левой границе
      fruitMap.set(leftFruit, fruitMap.get(leftFruit) - 1);

      // Если счетчик достиг нуля, удаляем фрукт из Map
      if (fruitMap.get(leftFruit) === 0) {
        fruitMap.delete(leftFruit);
      }

      // Сдвигаем левую границу вправо
      left++;
    }

    // Обновляем максимальное количество фруктов
    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
};