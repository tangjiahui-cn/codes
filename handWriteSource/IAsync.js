/**
 * 异步串行执行
 */
function series(arr, callback) {
    let result = []
    let index = 0

    next()
    function next() {
        if (index >= arr.length) {
            // 结束执行
            callback(null, result)
        } else {
            // 执行当前函数
            const fn = arr[index++]
            fn?.((data) => {
                result.push(data)
                next()
            })
        }
    }
}


const createPromise = (timeout) => new Promise(resolve => setTimeout(() => resolve(timeout), timeout))
const createFn = (timeout) => function (callback) { setTimeout(() => callback(timeout), timeout) }
series([
    createFn(100),
    createFn(200),
    createFn(300),
    createFn(400),
], (err, data) => {
    err && console.log('err', err)
    data && console.log('data', data)
})
