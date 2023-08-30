/**
 * 中介者模式
 * 
 * 解释：降低对象间的耦合度，从一对多关系改为一对一。
 */

class Middle {
  constructor () {
    this.components = [];
  }

  register (component) {
    component.notify = this.notify.bind(this);
    this.components.push(component);
  }

  notify (payload) {
    this.components.forEach(component => {
      component.receive(payload)
    })
  }
}

class Component {
  constructor (name) {
    this.name = name;
  }

  receive (payload) {
    console.log(this.name + ' receive -> ', payload);
  }
}

const middle = new Middle();
const a = new Component('A');
const b = new Component('B');

middle.register(a);
middle.register(b);

b.notify({name: '11'}) // 触发 a、b 接收
