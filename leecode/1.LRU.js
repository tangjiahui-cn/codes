/**
 * LRU （最近最少使用缓存）
 * 
 * At 2023/04/20
 * By TangJiaHui
 * Tips 双向链表 + 映射表 形式实现，映射表保存的 <key - node> 映射关系
 */

/**
 * 原理：
 *    每次读取值时，存在则返回对应值并拿到最前面，否则返回 - 1
 *    每次设置值时，存在则拿到最前面并更新值，否则直接插入到最前面
 */

class Node {
  prev = null
  next = null
  value = null
  key = null

  constructor(key, value) {
    this.key = key
    this.value = value
  }
}
var LRUCache = function (capacity) {
  this.size = capacity
  this.len = 0

  this.head = new Node()
  this.tail = new Node()
  this.map = {}
};

LRUCache.prototype.get = function (key) {
  if (key in this.map) {
    const node = this.map[key]
    this.moveToHead(node)
    return node.value
  }
  return -1
}

LRUCache.prototype.put = function (key, value) {
  // 如果存在
  if (key in this.map) {
    const node = this.map[key]
    node.value = value
    this.moveToHead(node)
  } else {
    console.log('not exist')
    const node = new Node(key, value)
    this.addToHead(node)
    this.map[key] = node
    this.len++
  }

  if (this.len > this.size) {
    const node = this.tail.next
    this.removeNode(node)
    delete this.map[node.key]
    this.len--
  }
  console.log(this.head)
}

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node)
  this.addToHead(node)
}

LRUCache.prototype.removeNode = function (node) {
  if (!this.head?.next) return
  const isOnlyOneNode = this.head.next === this.tail.next
  const isLastNode = this.tail.next === node

  if (isOnlyOneNode) {
    this.head.next = this.tail.next = null
  } else {
    if (isLastNode) {
      this.tail.next = node.prev
      node.prev.next = null
    } else {
      node.prev.next = node.next
      node.next.prev = node.prev
    }
  }
}

LRUCache.prototype.addToHead = function (node) {
  const isEmpty = !this.head.next

  if (isEmpty) {
    this.head.next = this.tail.next = node
  } else {
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
  }
}

const lRUCache = new LRUCache(3);
const list = []

lRUCache.put(1, 1)
lRUCache.put(2, 2)
lRUCache.put(3, 3)
lRUCache.put(4, 4)
list.push(lRUCache.get(4))
list.push(lRUCache.get(3))
list.push(lRUCache.get(2))
list.push(lRUCache.get(1))
lRUCache.put(5, 5)
list.push(lRUCache.get(1))
list.push(lRUCache.get(2))
list.push(lRUCache.get(3))
list.push(lRUCache.get(4))
list.push(lRUCache.get(5))

console.log('expect: ', [4, 3, 2, -1, -1, 2, 3, -1, 5])
console.log('list -> ', list)