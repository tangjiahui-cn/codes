/**
 * 有10个异步请求，如何保持同时3个并发？
 * 
 * At 2023/2/19
 * By TangJiaHui
 */
const timeoutArr = [1000, 3000, 2000, 9000, 8000, 7000, 5000, 3000, 1000, 700]
const requestArr = timeoutArr.map(timeout => () => query(timeout))
concurrentRequest(requestArr, 3)

function query (timeout) {
    return new Promise (resolve => {
        setTimeout(() => resolve(timeout), timeout)
    })
}

function concurrentRequest (requestArr = [], concurrent = 3) {
    let i = concurrent
    const concurrentArr = requestArr.slice(0, concurrent).map(createNewRequest)
    run(concurrentArr)

    function createNewRequest (request) {
        const newRequest = request().then(res => {
            concurrentArr.splice(concurrentArr.indexOf(newRequest), 1)
            return res
        })
        return newRequest
    }

    function run (concurrentArr) {
        if (!concurrentArr.length) return
        Promise.race(concurrentArr).then(res => {
            console.log('弹出: ', res)
            if (i >= requestArr.length) {
                run(concurrentArr)
            } else {
                concurrentArr.push(createNewRequest(requestArr[i++]))
                run(concurrentArr)
            }
        })
    }
}
