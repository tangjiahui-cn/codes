/**
 * 手写call
 * 
 * At 2023/2/20
 * By TangJiaHui
 * 
 * 
 * 手写call操作：
 * 1、在绑定对象o上创建一个临时id
 * 2、在临时id上绑定执行函数
 * 3、运行绑定对象上临时id对应的执行函数，保存结果
 * 4、删除临时id
 * 5、返回结果
 */

Function.prototype.ICall = function (o, ...args) {
    const tempFn = Symbol('')
    o[tempFn] = this
    const result = o[tempFn]?.(...args)
    delete o[tempFn]
    return result
}


// Test
const obj = {
    name: "tjh"
}

function show (prop) {
    console.log(this?.[prop])
}

show.call(obj, 'name')
show.ICall(obj, 'name')