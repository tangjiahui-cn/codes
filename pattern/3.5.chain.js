/**
 * 责任链模式
 *
 * 解释：行为型设计模式，当一个请求到达时，从链表第一个处理开始，直到最后
 */

class Chain {
  setNext(chain) {
    return (this.next = chain);
  }
  run(payload) {
    if (this.next) {
      return this.next.run(payload);
    }
    return null;
  }
}

class ChainA extends Chain {
  run(payload) {
    if (payload === "a") {
      return "current: chain A";
    }
    return super.run(payload);
  }
}

class ChainB extends Chain {
  run(payload) {
    if (payload === "b") {
      return "current: chain B";
    }
    return super.run(payload);
  }
}

const chain = new Chain();
chain.setNext(new ChainA()).setNext(new ChainB());

console.log(chain.run('a'));
console.log(chain.run('b'));
console.log(chain.run('c'));