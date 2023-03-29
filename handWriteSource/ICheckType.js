/**
 * 判断元素类型
 * 
 * 数字、字符串、null、undefined、布尔值、数组、对象、函数、Symbol
 */

export const isNumber = v => typeof v === 'number'
export const isString = v => typeof v === 'string'
export const isNull = v => v === null
export const isUndefined = v => v === undefined
export const isBoolean = v => typeof v === 'boolean'
export const isArray = v => Array.isArray(v)
export const isObject = v => typeof v === 'object' && v
export const isFunction = v => v instanceof Function
export const isSymbol = v => typeof v === 'symbol'
