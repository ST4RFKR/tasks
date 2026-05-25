Array.prototype.myFilter1 = function (fn) {
    //this - массив
    const originalArray = this;

    const filteredArray = [];

    for (let i = 0; i < originalArray.length; i++) {
        const currentItem = originalArray[i];
        //fn - callback функция которая в стандарном принимает три аргумента, первый - элемент, второй - индекс, третий - сам массив

        if (fn(currentItem, i, originalArray)) {
            filteredArray.push(currentItem);
        }

    }

    return filteredArray;
}