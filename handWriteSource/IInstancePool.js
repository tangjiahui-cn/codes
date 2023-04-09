/**
 * 实例池
 * 
 * 介绍：默认容量为maxSize，动态扩容，并在取消使用时，回缩至maxSize大小。
 * 用途：减少实例的重复创建。
 * 
 * At 2023/4/9
 * By TangJiaHui
 */

// 获取唯一id
const getId = (() => {
  let id = 0;
  return () => id++
})()

const STATUS = { ON: 'ON', OFF: 'OFF' }

// 实例
class Instance {
  key = '1'
  status = STATUS.OFF

  constructor(status) {
    this.status = status
    this.key = getId()
  }

  setStatus(status) {
    this.status = status
  }

  show() {
    console.log(`i am --> ${this.key}`)
  }

  // 运行函数
  run(callback) {
    return new Promise(resolve => {
      setTimeout(() => {
        callback?.()
        return resolve()
      }, 300)
    })
  }
}


// 实例池
class IInstancePool {
  list = []     // 实例数组
  maxSize = 5   // 最大实例数目（超过会加入循环队列）
  size = 0      // 当前存储实例数目
  free = 0      // 空闲实例数目
}

// 方法 - 获取实例
IInstancePool.prototype.getInstance = function () {
  const freeInstance = this.getFreeInstance()
  if (freeInstance) {
    return this.useInstance(freeInstance)
  }

  const ins = new Instance(STATUS.ON)
  this.list.push(ins)
  return ins
}

// 方法 - 使用实例
IInstancePool.prototype.useInstance = function (ins) {
  ins.setStatus(STATUS.ON)
  return ins
}

// 方法 - 取消使用实例
IInstancePool.prototype.unUseInstance = function (ins) {
  ins.setStatus(STATUS.OFF)
  if (++this.free > this.maxSize) {
    this.deleteInstance(ins)
  }
  return this.list
}

// 方法 - 查找空闲实例
IInstancePool.prototype.getFreeInstance = function () {
  return this.list.find(x => x.status === STATUS.OFF)
}

// 方法 - 删除实例
IInstancePool.prototype.deleteInstance = function (ins) {
  if (ins.status === STATUS.ON) return false
  this.free--
  this.list = this.list.filter(x => x.key !== ins.key)
}


// ------------- 测试代码 ------------------------
const pool = new IInstancePool()
const ins_1 = pool.getInstance()
const ins_2 = pool.getInstance()
const ins_3 = pool.getInstance()
const ins_4 = pool.getInstance()
const ins_5 = pool.getInstance()
const ins_6 = pool.getInstance()
const ins_7 = pool.getInstance()
console.log(ins_1)
console.log(ins_2)
console.log(ins_3)
console.log(ins_4)
console.log(ins_5)
console.log(ins_6)
console.log(ins_7)
console.log('pool -> ', pool.list)

Promise.all([
  ins_1.run(() => pool.unUseInstance(ins_1)),
  ins_2.run(() => pool.unUseInstance(ins_2)),
  ins_3.run(() => pool.unUseInstance(ins_3)),
  ins_4.run(() => pool.unUseInstance(ins_4)),
  ins_5.run(() => pool.unUseInstance(ins_5)),
  ins_6.run(() => pool.unUseInstance(ins_6)),
  ins_7.run(() => pool.unUseInstance(ins_7))
]).then(() => {
  console.log('pool -> ', pool.list)
})