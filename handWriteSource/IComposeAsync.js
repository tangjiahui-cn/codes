/**
 * 异步compose
 * 
 * At 2023/03/12
 * By TangJiaHui
 * Tips 从右到左
 */

function IComposeAsync (...args) {
    return async function (arg) {
        return args.reduceRight(async (result, fn) => {
            return fn(await result)
        }, arg)
    }
}


// test
const fnA = (n) => new Promise(resolve => setTimeout(() => resolve(`${n}A` ), 500))
const fnB = (n) => new Promise(resolve => setTimeout(() => resolve(`${n}B` ), 500))
const fnC = (n) => new Promise(resolve => setTimeout(() => resolve(`${n}C` ), 500))
const fnD = (n) => new Promise(resolve => setTimeout(() => resolve(`${n}D` ), 500))

const result = IComposeAsync(
    fnA,
    fnB,
    fnC,
    fnD,
)(1)

result.then(res =>  console.log(res)) // 1DCBA
