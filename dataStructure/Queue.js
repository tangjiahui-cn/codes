/**
 * 线性队列
 * 
 * At 2023/2/16
 * By TangJiaHui
 * Tips: 队列先进先出，线性结构是一段连续的内存空间。
 */

class Queue {
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
        const data = this.list?.[0]
        this.list = this.list.slice(1)
        return data
    }

    show() {
        console.log('list: ', this.list, this.length)
    }
}


// test
const list = new Queue()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.show()             // 1234
console.log(list.pop()) // 1
list.show()             // 234