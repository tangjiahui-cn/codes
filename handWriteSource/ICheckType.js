/**
 * 判断元素类型
 * 
 * 数字、字符串、null、undefined、布尔值、数组、对象、函数、Symbol
 */

const isNumber = v => typeof v === 'number'
const isString = v => typeof v === 'string'
const isNull = v => v === null
const isUndefined = v => v === undefined
const isBoolean = v => typeof v === 'boolean'
const isArray = v => Array.isArray(v)
const isObject = v => typeof v === 'object' && !!v && !isArray(v)
const isFunction = v => v instanceof Function
const isSymbol = v => typeof v === 'symbol'
