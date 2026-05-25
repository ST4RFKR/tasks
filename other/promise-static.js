function promiseAll(promises) {
    // Возвращаем новый Promise, который будет завершён,
    // когда завершатся *все* переданные промисы (или отклонён при первой ошибке)
    return new Promise((resolve, reject) => {

        // Проверяем, что аргумент — массив. Если нет — выбрасываем ошибку.
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        // Массив для хранения результатов в том же порядке, что и входные промисы
        const result = [];

        // Счётчик успешно завершённых промисов
        let completed = 0;

        // Если массив пуст — возвращаем сразу пустой результат
        if (promises.length === 0) {
            return resolve([]);
        }

        // Перебираем каждый элемент входного массива
        promises.forEach((el, index) => {

            // Оборачиваем элемент в Promise.resolve — на случай, если это не промис, а обычное значение.
            Promise.resolve(el)
                .then(value => {
                    // Сохраняем результат в том же индексе, что и исходный элемент
                    result[index] = value;

                    // Увеличиваем счётчик успешно завершённых промисов
                    completed += 1;

                    // Если все промисы завершены — резолвим итоговый массив
                    if (completed === promises.length) {
                        resolve(result);
                    }
                })
                // Если хотя бы один промис отклонён — весь promiseAll должен завершиться с ошибкой
                .catch(reject);
        });
    });
}


const allSettled = (promises) => {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(promises)) {
            reject(new Error("arg must be array"))
        }
        if (!promises.length) {
            resolve([])
        }

        const result = [];
        let completed = 0;


        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then(value => {
                    result[idx] = { status: "fulfilled", value };
                })
                .catch(reason => {
                    result[idx] = { status: "rejected", reason };
                })
                .finally(() => {
                    completed++

                    if (completed === promises.length) {
                        resolve(result)
                    }
                })

        })

    })
}

const any = (promises) => {
    return new Promise((resolve, reject) => {
        let rejectedCount = 0;
        const errors = [];
        if (!Array.isArray(promises)) {
            reject(new Error("arg must be array"))
        }
        if (!promises.length) {
            resolve([])
        }
        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then(res => resolve(res))
                .catch(err => {
                    rejectedCount++;
                    errors[idx] = err;

                    if (rejectedCount === promises.length) {
                        reject(new AggregateError(err, "All promises rejected :((("))
                    }
                })


        })
    })
}

const race = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            Promise.resolve(p)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    })
}


