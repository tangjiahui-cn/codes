/**
 * 单例模式
 *
 * 解释：确保只有一个实例，提供全局访问
 */

class Single {
  ins = null;

  static getIns() {
    if (this.ins) return this.ins;
    return (this.ins = {});
  }
}

console.log(Single.getIns() === Single.getIns()); // true

// 提取公共单例逻辑
function MyIns(name) {
  return {
    show() {
      console.log("->", name);
    },
  };
}

function getSingle(fn) {
  var result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
}

const CreateIns = getSingle(MyIns);
console.log(CreateIns("aa") === CreateIns("bb")); // true
CreateIns("cc").show(); // 'aa'
