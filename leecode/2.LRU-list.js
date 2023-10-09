/**
 * LRU-list（最近最少使用缓存的线性表形式）
 * 
 * At 2023/04/20
 * By TangJiaHui
 * Tips 使用一个数组按顺序保存缓存（每次移动会耗费很长时间，属于时间换空间，仅供流程参考）
 */

/**
 * 原理：
 *    每次读取值时，存在则返回对应值并拿到最前面，否则返回 - 1
 *    每次设置值时，存在则拿到最前面并更新值，否则直接插入到最前面
 */

class Node {
  key = null
  value = null

  constructor (key, value) {
    this.key = key
    this.value = value
  }
}

var LRUCache = function (capacity) {
  this.size = capacity
  this.list = []
};

LRUCache.prototype.get = function (key) {
  let o = null
  this.list = this.list.filter(x => {
    if (x.key === key) {
      o = x
      return false
    }
    return true
  })
  if (o) this.list.unshift(o)
  return o ? o?.value : -1
}

LRUCache.prototype.put = function (key, value) {
  let o
  // 如果存在
  this.list = this.list.filter(x => {
    if (x.key === key) {
      o = x
      return false
    }
    return true
  })

  if (o) o.value = value
  this.list.unshift(o || new Node(key, value))

  if (this.list.length > this.size) {
    this.list = this.list.slice(0, this.list.length - 1)
  }
}


// -------------------------------------- 测试代码 ----------------------------------
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