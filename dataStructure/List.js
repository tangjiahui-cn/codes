/**
 * 线性表
 * 
 * At 2023/2/13
 * By TangJiaHui
 */

class List {
    list = []
    length = 0

    constructor () {
        this.list = []
    }

    push (data) {
        this.list[this.length++] = data
    }

    pop () {
        if (!this.length) return
        const data = this.list[--this.length]
        this.list = this.list.slice(0, this.length)
        return data
    }

    shift () {
        if (!this.length) return
        const data = this.list[0]
        this.list = this.list.slice(1)
        this.length--
        return data
    }

    unshift (data) {
        this.list = [data, ...this.list]
        return ++this.length
    }

    del (index) {
        if (!this.length) return
        const data = this.list[index]
        this.list = [
            ...this.list.slice(0, index),
            ...this.list.slice(index + 1, this.length--)
        ]
        return data
    }

    update (index, value) {
        if (!this.length) return
        const lastValue = this.list[index]
        this.list[index] = value
        return lastValue
    }

    show () {
        console.log('list: ', this.list, this.length)
    }
}


// test
const list = new List()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list.unshift(0))        // 5 (array length)
list.show() // [0, 1, 2, 3, 4]
console.log(list.shift())           // 0 (del value)
list.show() // [1, 2, 3, 4]
console.log(list.del(0))            // 1 (del value)
list.show() // [2, 3, 4]
console.log(list.update(0, 10))     // 2 (old value)
list.show() // [10, 3, 4]
