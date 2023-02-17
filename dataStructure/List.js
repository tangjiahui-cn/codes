/**
 * 线性表
 * 
 * At 2023/2/13
 * By TangJiaHui
 * Tips: 线性表是一段连续的存储空间(当前代码已包含 线性栈push/pop)
 */

class List {
    list = []
    length = 0

    constructor() {
        this.list = []
        this.length = 0
    }

    push(data) {
        this.list[this.length++] = data
    }

    pop() {
        if (!this.length) return
        const data = this.list[--this.length]
        this.list = this.list.slice(0, this.length)
        return data
    }

    shift() {
        if (!this.length) return
        const data = this.list[0]
        this.list = this.list.slice(1)
        this.length--
        return data
    }

    unshift(data) {
        this.list = [data, ...this.list]
        return ++this.length
    }

    del(index) {
        if (!this.length || index > (this.length - 1)) return
        const data = this.list[index]
        this.list = [
            ...this.list.slice(0, index),
            ...this.list.slice(index + 1, this.length--)
        ]
        return data
    }

    update(index, value) {
        if (!this.length || index > (this.length - 1)) return
        const lastValue = this.list[index]
        this.list[index] = value
        return lastValue
    }

    insert(index, value) {
        if (index <= this.list.length) {
            this.list = [
                ...this.list.slice(0, index),
                value,
                ...this.list.slice(index, ++this.length)
            ]
        }
        return this.length
    }

    show() {
        console.log('list: ', this.list, this.length)
    }
}


// test
const list = new List()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log('unshift: ', list.unshift(0))        // 5 (array length)
list.show() // [0, 1, 2, 3, 4]
console.log('shift: ', list.shift())           // 0 (del value)
list.show() // [1, 2, 3, 4]
console.log('del: ', list.del(0))            // 1 (del value)
list.show() // [2, 3, 4]
console.log('update: ', list.update(0, 10))     // 2 (old value)
list.show() // [10, 3, 4]
console.log('insert: ', list.insert(1, 5))      // 4
list.show() // [10, 5, 3, 4]
