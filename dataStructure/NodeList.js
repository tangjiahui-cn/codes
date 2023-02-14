/**
 * 链表（单向）
 * 
 * At 2023/2/14
 * By TangJiaHui
 * Tips: 链表是一段离散的存储空间(当前代码已包含 链表栈push/pop)
 * Think: 插入时的优化：判断插入位置在链表中前半段还是后半段，以此采用头部遍历还是尾部遍历（代码中未区分，仅使用头部遍历）
 */

class Node {
    prev = null
    next = null
    data = null

    constructor(value, prev, next) {
        this.prev = prev
        this.next = next
        this.data = value
    }
}

class NodeList {
    head = null
    tail = null
    length = 0

    constructor() {
        this.head = new Node()
        this.tail = new Node()
        this.length = 0
    }

    push(data) {
        const node = new Node(data)

        if (this.tail.next) {
            node.prev = this.tail.next
            node.prev.next = node
            this.tail.next = node
        } else {
            node.prev = this.head
            this.head.next = node
            this.tail.next = node
        }

        return ++this.length
    }

    pop() {
        const node = this.tail.next

        if (this.tail.next === this.head.next) {
            this.head.next = null
            this.tail.next = null
        } else {
            this.tail.next = node.prev
            node.prev.next = node.next
        }

        this.length--
        return node.data
    }

    shift() {
        const node = this.head.next

        if (this.head.next === this.tail.next) {
            this.head = null
            this.tail = null
        } else {
            this.head.next = node.next
            node.next.prev = this.head
        }

        this.length--
        return node.data
    }

    unshift(data) {
        const node = new Node(data, this.head, this.head.next)

        if (this.head.next) {
            this.head.next = node
            node.next.prev = node
        } else {
            this.head.next = node
            this.tail.next = node
        }

        return ++this.length
    }

    del(index) {
        if (!this.length || index > (this.length - 1)) return

        let ind = 0
        let current = this.head.next
        while (current) {
            if (ind === index) {
                current.prev.next = current.next
                if (current.next) {
                    current.next.prev = current.prev
                }
                this.length--
                return current.data
            }
            ind++
            current = current.next
        }
        return
    }

    update(index, value) {
        if (!this.length || index > (this.length - 1)) return

        let ind = 0
        let current = this.head.next
        while (current) {
            if (ind === index) {
                const lastValue = current.data
                current.data = value
                return lastValue
            }
        }
    }

    insert(index, value) {
        let ind = 0
        let current = this.head.next
        while (current) {
            if (ind === index) {
                const node = new Node(value, current.prev, current)
                current.prev.next = node
                current.prev = node
                return ++this.length
            }
            ind++
            current = current.next
        }
    }

    show() {
        const list = []
        let current = this.head.next
        while (current) {
            list.push(current.data)
            current = current.next
        }
        console.log('list: ', list, this.length)
    }
}


// test
const list = new NodeList()
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
