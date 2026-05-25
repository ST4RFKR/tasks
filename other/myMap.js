Array.prototype.myMap = function (fn) {

    const originalArray = this;

    const resultArray = [];

    for (let i = 0; i < originalArray.length; i++) {
        const currentItem = originalArray[i];

        resultArray.push(fn(currentItem, i, originalArray));

    }

    return resultArray;
}

