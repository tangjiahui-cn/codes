// 1、原型模式
// 将 对象作为构造函数的原型，以此复制对象上的所有属性。


const obj = {
  name: '111',
  show () {
    console.log(this.name)
  }
}

const fn = function () {}
fn.prototype = obj;

new fn().show();

// 或者
Object.create(obj).show();

