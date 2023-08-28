/**
 * 享元模式
 *
 * 解释：减少创建对象的数量，外部状态化
 *
 * 和单例模式的区别：
 * （1）享元模式有很多对象，单例模式只有一个对象。
 * （2）享元模式是节省内存空间，单例模式是用来共享状态。
 */

// 创建实例函数 （状态外部化）
function createNewIns (id) {
  const ins = {};
  ins.id = id;
  ins.name = `实例${id}`;
  return ins;
}

// 对象池 （共享对象，节约内存） 
const Pool = (function (createFn) {
  let id = 0;
  const pool = [];

  return {
    create() {
      if (pool.length) {
        return pool.shift();
      }
      return createFn.call(this, id ++);
    },
    unUse(ins) {
      pool.push(ins);
    },
  };
})(createNewIns);


const ins_1 = Pool.create();
const ins_2 = Pool.create();
Pool.unUse(ins_1);
const ins_3 = Pool.create();

console.log(ins_1.name); // 实例0
console.log(ins_2.name); // 实例1
console.log(ins_3.name); // 实例0

