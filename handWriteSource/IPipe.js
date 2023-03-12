/**
 * 手写pipe
 * 
 * At 2023/03/12
 * By TangJiaHui
 */

function IPipe (...fnArray) {
    return function (arg) {
        return fnArray.reduce((result, fn) => {
            return fn?.(result)
        }, arg)
    }
}


// test
const fnA = (n) => `${n}A` 
const fnB = (n) => `${n}B` 
const fnC = (n) => `${n}C` 
const fnD = (n) => `${n}D` 

const result = IPipe(
    fnA,
    fnB,
    fnC,
    fnD,
)(1)

console.log(result) // 1ABCD