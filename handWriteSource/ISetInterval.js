/**
 * 手写 setInterval
 * 
 * At 2023/3/7
 * By TangJiaHui
 */

function IClearInterval (timerId) {
    clearTimeout(timerId)
}

function ISetInterval (fn, delay) {
    let timerId;

    (function run () {
        timerId = setTimeout(() => {
            fn()
            run()
        }, delay)
    })()

    return () => timerId
}


// 测试 - 2秒后取消轮询
const getTimeId = ISetInterval(() => {
    console.log(1)
}, 1000)

setTimeout(() => {
    IClearInterval(getTimeId())
}, 2500)