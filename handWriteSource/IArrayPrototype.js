/**
 * 手写 数组的原型方法
 * 
 * forEach
 * map
 * 
 * At 2023/3/22
 */

Array.prototype._forEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
        fn?.(this[i], i, this)
    }
}

Array.prototype._map = function (fn) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(fn?.(this[i], i, this))
    }
    return result
}


// 测试
const list = [
    {id: 1, name: 'tangjiahui', age: 23},
    {id: 2, name: '333', age: 23},
    {id: 3, name: 'sss', age: 23},
    {id: 4, name: 'zzz', age: 23},
    {id: 5, name: 'vvv', age: 23},
]

// forEach
list._forEach(x => console.log('forEach -> ', x))
// map
const mapList = list._map(x => ({...x, id: 'map_' + x?.id}))
console.log('mapList -> ', mapList)