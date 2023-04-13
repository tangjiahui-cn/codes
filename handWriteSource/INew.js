/**
 * 手写 new
 * 
 * At 2023/2/20
 * By TangJiaHui
 * MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
 * 
 * 
 * new 关键字操作：
 * 1、创建空对象 {}
 * 2、{} 添加属性 __proto__,指向构造函数的原型对象 prototype
 * 3、将 {} 作为this的上下文
 * 4、如果该函数没有返回对象，则返回this。否则，返回对象。
 */

function myNew(fn, ...args) {
    const o = {};
    o.__proto__ = fn.prototype;
    const result = fn.apply(o, args);

    // result是执行构造函数的结果
    // 如果fn 是构造函数(函数内无返回)，则这个值为undefined，返回 o（此时o绑定了上下文）
    // 如果fn 不是构造函数，
    // -- 如果result 是对象，则返回函数结果 result
    // -- 否则，返回绑定了上下文的对象 o
    return (typeof result === 'object' && result) ? result: o;
}

// Test
function Test(name, age) {
    this.name = name || 'tjh'
    this.age = age || 23

    this.show = function () {
        console.log(this.name)
    }
}

new Test('ttjjhh', 2233)?.show?.()
myNew(Test, 'ttjjhh', 2233)?.show?.()
console.log(myNew(Test, 'ttjjhh', 2233))
console.log(new Test('ttjjhh', 2233))