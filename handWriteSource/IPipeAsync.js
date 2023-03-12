/**
 * 异步Pipe
 * 
 * At 2023/03/12
 * By TangJiaHui
 */

function IPipeAsync (...fnArray) {
    return function (arg) {
        return fnArray.reduce(async (result, fn) => {
            return fn(await result)
        }, arg)
    }
}

// test
const fnA = (n) => new Promise(resolve => setTimeout(() => resolve(`${n}A` ), 500))
const fnB = (n) => new Promise(resolve => setTimeout(() => resolve(`${n}B` ), 500))
const fnC = (n) => new Promise(resolve => setTimeout(() => resolve(`${n}C` ), 500))
const fnD = (n) => new Promise(resolve => setTimeout(() => resolve(`${n}D` ), 500))

const result = IPipeAsync(
    fnA,
    fnB,
    fnC,
    fnD,
)(1)

result.then(res => console.log(res)) // 1ABCD