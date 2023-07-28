/**
 * 代理模式
 *
 * 解释：调用代理对象，有代理对象进行目标操作
 */

const A = {
  receive(name) {
    console.log("我是A，收到了：", name);
  },
};

const AProxy = {
  receive(name) {
    A.receive(name + " -> 【来自代理对象AProxy】");
  },
};

const B = {
  sendA(name) {
    A.receive(name);
  },
  sendAProxy(name) {
    AProxy.receive(name);
  },
};

B.sendA('xxx');
B.sendAProxy('xxx');