/**
 * 迭代器模式
 *
 *
 * 解释：按一种顺序访问聚合对象中各个元素，又不需要暴露该对象的内部表示。
 */

const a1 = +(function () {
  console.log("a1");
  return true;
})();

const a2 = +(function () {
  console.log("a2");
  return true;
})();

const a3 = +(function () {
    return false;
})();

function iterator(...args) {
  for (let i = 0; i < args.length; i++) {
    if (!args[i]) {
      return false;
    }
  }
}

iterator(a1, a2, a3); // a1 a2
