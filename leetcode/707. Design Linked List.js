// Конструктор узла списка
function Node(val) {
  this.val = val;   // значение узла
  this.next = null; // ссылка на следующий узел (по умолчанию null)
}

// Конструктор связанного списка
var MyLinkedList = function () {
  this.head = null; // голова списка, первый узел
  this.size = 0;    // количество элементов в списке
};

/** 
 * Получение значения узла по индексу
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // Проверка на некорректный индекс
  if (index < 0 || index >= this.size) return -1;

  // Начинаем с головы списка
  let current = this.head;

  // Проходим по списку до нужного индекса
  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  // Возвращаем значение найденного узла
  return current.val;
};

/** 
 * Добавление узла в начало списка
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  // Используем универсальную функцию addAtIndex с индексом 0
  this.addAtIndex(0, val);
};

/** 
 * Добавление узла в конец списка
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  // Используем addAtIndex с индексом, равным текущему размеру списка
  this.addAtIndex(this.size, val);
};

/** 
 * Добавление узла по заданному индексу
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // Если индекс некорректный, просто выходим
  if (index < 0 || index > this.size) return;

  if (index === 0) {
    // Вставка в голову
    let newNode = new Node(val);   // создаем новый узел
    newNode.next = this.head;      // новый узел указывает на старую голову
    this.head = newNode;           // обновляем голову списка
  } else {
    // Вставка не в голову
    let current = this.head;

    // Проходим до узла перед нужным индексом
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    // Создаем новый узел
    let newNode = new Node(val);

    // Новый узел "вставляем" в список
    newNode.next = current.next;   // новый узел указывает на следующий после current
    current.next = newNode;        // предыдущий узел теперь указывает на новый
  }

  // Увеличиваем размер списка
  this.size++;
};

/** 
 * Удаление узла по индексу
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  // Проверка индекса
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    // Удаление головы списка
    this.head = this.head.next;
  } else {
    // Находим узел перед тем, который хотим удалить
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    // "Перепрыгиваем" через удаляемый узел
    current.next = current.next.next;
  }

  // Уменьшаем размер списка
  this.size--;
};
