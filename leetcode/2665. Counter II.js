/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let res = init;

    const increment = () => {
        res += 1;
        return res;
    }

    const decrement = () => {
        res -= 1;
        return res;
    }

    const reset = () => {
        res = init;
        return res;
    }

    return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */