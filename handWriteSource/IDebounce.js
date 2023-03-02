/**
 * 防抖
 * 
 * At 2023/03/02
 * By TangJiaHui
 */

function IDebounce (fn, delay) {
    const that = this
    let timeId

    return function () {
        timeId && clearTimeout(timeId)
        timeId = setTimeout(() => {
            fn?.call(that, ...arguments)
        }, delay)
    }
}

console.time()
const debounceSearch = IDebounce(v => {
    console.timeEnd() // 打印大于等于 2s
}, 1000)

debounceSearch(1, 2)
setTimeout(() => {
    debounceSearch(2, 2)
    setTimeout(() => debounceSearch(), 500)
}, 500)
