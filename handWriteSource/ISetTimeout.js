/**
 * 用setInterval实现setTimeout
 * 
 * At 2023/03/21
 * By TangJiaHui
 */

function ISetTimeout (fn, delay) {
    let timeId = setInterval((...args) => {
        fn?.(...args)
        clearInterval(timeId)
    }, delay)
}

// 测试
ISetTimeout(() => {
    console.log(1)
}, 1000)