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

Array.prototype._reduce = function (fn, defaultValue) {
    let result = defaultValue
    for (let i = 0; i < this.length; i++) {
        result = fn?.(result, this[i], this)
    }
    return result
}

Array.prototype._reduceRight = function (fn, defaultValue) {
    let result = defaultValue
    for (let i = this.length - 1; i >= 0; i--) {
        result = fn?.(result, this[i], this)
    }
    return result
}

Array.prototype._filter = function (fn) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (fn?.(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}

Array.prototype._find = function (fn) { 
    for (let i = 0; i < this.length; i++) {
        if (fn?.(this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
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
console.log('map -> ', list._map(x => ({...x, id: 'map_' + x?.id})))
console.log('reduce -> ', list._reduce((result, cur) => [...result, cur?.id], [])) // [1,2,3,4,5]
console.log('reduceRight -> ', list._reduceRight((result, cur) => [...result, cur?.id], [])) // [5,4,3,2,1]
console.log('filter -> ', list._filter(x => x.id > 3))  // [{id: 4, ...}, {id: 5, ...}]
console.log('find -> ', list._find(x => x.id === 3))    // {id: 3, ...}