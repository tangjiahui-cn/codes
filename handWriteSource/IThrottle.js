/**
 * 节流
 * 
 * At 2023/03/03
 * By TangJiaHui
 **/

function IThrottle (fn, delay) {
    let timerId = null
    let that = this

    return function (...args) {
        if (!timerId) {
            fn?.call(that, ...args)
            timerId = setTimeout(() => {
                timerId = null
            }, delay)
        }
    }
}

const throttleQuery = IThrottle(() => {
    console.timeLog('xxx', '--->')
}, 1000)

console.time('xxx')
throttleQuery()
setTimeout(() => {
    console.timeLog('xxx')
    throttleQuery()
    setTimeout(() => {
        console.timeLog('xxx')
        throttleQuery()
        setTimeout(() => {
            console.timeLog('xxx')
            throttleQuery()
            setTimeout(() => {
                console.timeLog('xxx')
                throttleQuery()
            }, 600)
        }, 600)
    }, 600)
}, 600)