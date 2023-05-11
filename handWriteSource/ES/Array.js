
/**
 * 实现ES6数组的全部方法
 */
function formatIndex(index) {
  return index === undefined
    ? 0
    : index < 0
      ? index + this.length
      : index
}

function formatStartEnd(start, end) {
  return {
    start: formatIndex.call(this, start),
    end: end === undefined
      ? len
      : formatIndex.call(this, end)
  }
}

Array._from = function (arrayLike, mapFn, thisArg) {
  const result = []
  for (const item of arrayLike) {
    arr.push(mapFn ? mapFn?.call(thisArg, item) : item)
  }
  return result
}

Array._of = function (...args) {
  return args
}

Array.prototype._at = function (index) {
  return index < 0 ? this[this.length + index]
    : this[index]
}

Array.prototype._concat = function (...args) {
  const result = [...this]
  args.forEach(data => {
    if (Array.isArray(data)) {
      result.push(...data)
    } else {
      result.push(data)
    }
  })
  return result
}

Array.prototype._copyWithin = function (target, _start, _end) {
  const { start, end } = formatStartEnd.call(this, _start, _end)

  if (start >= end) {
    return this
  }

  let index = 0
  target = formatIndex(target)
  const listCopy = [...this]

  for (let i = start; i < end; i++) {
    const current = target + index++
    if (current >= this.length) {
      break;
    }
    this[current] = listCopy[i]
  }

  return this
}

Array.prototype._fill = function (value, _start, _end) {
  let { start, end } = formatStartEnd.call(this, _start, _end)
  if (end > this.length) end = this.length
  if (start > end) return this
  for (let i = start; i < end; i++) {
    this[i] = value
  }
  return this
}

Array.prototype._every = function (callBackFn) {
  for (let i = 0; i < this.length; i++) {
    if (!callBackFn?.(this[i], i, this)) {
      return false
    }
  }
  return true
}

Array.prototype._some = function (callBackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFn?.(this[i], i, this)) {
      return true
    }
  }
  return false
}

Array.prototype._filter = function (callBackFn) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    if (callBackFn?.(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
}

Array.prototype._forEach = function (callBackFn) {
  for (let i = 0; i < this.length; i++) {
    callBackFn?.(this[i], i, this)
  }
}

Array.prototype._map = function (callBackFn) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callBackFn?.(this[i], i, this))
  }
  return result
}

Array.prototype._find = function (callBackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFn?.(this[i], i, this)) {
      return this[i]
    }
  }
  return undefined
}

Array.prototype._findLast = function (callBackFn) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callBackFn?.(this[i], i, this)) {
      return this[i]
    }
  }
  return undefined
}

Array.prototype._findIndex = function (callBackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFn?.(this[i], i, this)) {
      return i
    }
  }
  return -1
}

Array.prototype._findLastIndex = function (callBackFn) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callBackFn?.(this[i], i, this)) {
      return i
    }
  }
  return -1
}

Array.prototype._includes = function (searchElement, fromIndex) {
  fromIndex = fromIndex ?? 0
  if (fromIndex >= this.length) return false
  else if (fromIndex < -this.length) fromIndex = 0
  else if (fromIndex < 0) fromIndex += this.length

  for (let i = fromIndex; i < this.length; i++) {
    if (searchElement === this[i]) {
      return true
    }
  }

  return false
}

Array.prototype._indexOf = function (searchElement, fromIndex) {
  fromIndex = fromIndex ?? 0
  if (fromIndex >= this.length) return -1
  else if (fromIndex < -this.length) fromIndex = 0
  else if (fromIndex < 0) fromIndex += this.length

  for (let i = fromIndex; i < this.length; i++) {
    if (searchElement === this[i]) {
      return i
    }
  }

  return -1
}

Array.prototype._lastIndexOf = function (searchElement, fromIndex) {
  fromIndex = fromIndex ?? this.length - 1
  if (fromIndex < - this.length) return -1
  else if (fromIndex >= this.length) from = this.length - 1
  else if (fromIndex < 0) fromIndex += this.length

  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i
    }
  }

  return -1
}

Array.prototype._join = function (separator = ',') {
  let result = ''

  for (let i = 0; i < this.length; i++) {
    if (i > 0) {
      result += separator
    }
    result += this[i]
  }

  return result
}

Array.prototype._reduce = function (callbackFn, initialValue) {
  if (this.length <= 0) {
    if (arguments.length === 1) {
      throw new Error('Reduce of empty array with no initial value')
    } else {
      return initialValue
    }
  }

  let i = 0
  let result = initialValue

  // 无initialValue时
  if (arguments.length !== 2) {
    i += 1
    result = this[0]
  }

  for (i; i < this.length; i ++) {
    result = callbackFn?.(result, this[i], i, this)
  }

  return result
}

Array.prototype._reduceRight = function (callbackFn, initialValue) {
  if (this.length <= 0) {
    if (arguments.length === 1) {
      throw new Error('Reduce of empty array with no initial value')
    } else {
      return initialValue
    }
  }

  let i = this.length - 1
  let result = initialValue

  // 无initialValue时
  if (arguments.length !== 2) {
    i = this.length - 2
    result = this[this.length - 1]
  }

  for (i; i >= 0; i --) {
    result = callbackFn?.(result, this[i], i, this)
  }

  return result
}

Array.prototype._reverse = function () {
  if (this.length < 2) return this
  const isDouble = this.length % 2 === 0
  const maxIndex = this.length - 1
  const replaceMid = isDouble
    ? (this.length / 2 - 1)
    : ((this.length - 1) / 2 - 1)

  for (let i = 0; i <= replaceMid; i ++) {
    const temp = this[i]
    const rightIndex = maxIndex - i
    this[i] = this[rightIndex]
    this[rightIndex] = temp
  }

  return this
}

Array.prototype.toReversed = function () {
  const result = Array.from(this)

  if (this.length < 2) return result
  const isDouble = this.length % 2 === 0
  const maxIndex = this.length - 1
  const replaceMid = isDouble
    ? (this.length / 2 - 1)
    : ((this.length - 1) / 2 - 1)

  for (let i = 0; i <= replaceMid; i ++) {
    const temp = result[i]
    const rightIndex = maxIndex - i
    result[i] = result[rightIndex]
    result[rightIndex] = temp
  }

  return result
}

Array.prototype.with = function (index, value) {
  index = index ?? 0
  if (index < -this.length || index >= this.length) {
    throw new Error(`Uncaught RangeError: Invalid index : ${index}`)
  }

  const result = []
  if (index < 0) index += this.length
  for (let i = 0; i < this.length; i ++) {
    result.push(i < index ? this[i] : value)
  }
  return result
}
