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
const debounceSearch = IDebounce(() => {
    console.timeEnd() // 打印大于等于 2s
}, 1000)

debounceSearch()
setTimeout(() => {
    debounceSearch()
    setTimeout(() => debounceSearch(), 500)
}, 500)
