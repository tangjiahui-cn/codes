/**
 * 手写apply
 * 
 * At 2023/2/21
 * By TangJiaHui
 * 
 * 
 * 手写apply操作：
 * 1、在绑定对象o上创建一个临时id
 * 2、在临时id上绑定执行函数
 * 3、运行绑定对象上临时id对应的执行函数，保存结果
 * 4、删除临时id
 * 5、返回结果
 */

Function.prototype.IApply = function (o, args = []) {
    const tempFn = Symbol('')
    o[tempFn] = this
    const result = o[tempFn]?.(...args)
    delete o[tempFn]
    return result
}


// Test
const obj = {
    name: "tjh",
    age: 23
}

function show (nameProp, ageProp) {
    console.log(this?.[nameProp], this?.[ageProp])
}

show.apply(obj, ['name', 'age'])
show.IApply(obj, ['name', 'age'])