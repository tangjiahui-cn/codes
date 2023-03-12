/**
 * 手写compose
 * 
 * At 2023/03/12
 * By TangJiaHui
 * Tips 从右到左
 */

function ICompose (...args) {
    return function (arg) {
        return args.reduceRight((result, fn) => {
            return fn(result)
        }, arg)
    }
}


// test
const fnA = (n) => `${n}A` 
const fnB = (n) => `${n}B` 
const fnC = (n) => `${n}C` 
const fnD = (n) => `${n}D` 

const result = ICompose(
    fnA,
    fnB,
    fnC,
    fnD,
)(1)

console.log(result) // 1DCBA