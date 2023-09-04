/**
 * 发布订阅模式（观察者模式）
 * 
 * at 2023.6.25
 * By TangJiaHui
 */
class Observe {
  msg = {};

  on(id, fn, once) {
    const list = this.msg[id] = this.msg?.[id] || []
    list.push({
      fn,
      once
    })
  }

  once(id, fn) {
    this.on(id, fn, true);
  }

  notify(id, payload) {
    const list = this.msg?.[id] || []
    this.msg[id] = list.filter(({ fn, once }) => {
      fn?.(payload);
      return !once;
    })
  }

  remove(id) {
    delete this.msg[id];
  }
}

const observer = new Observe();
observer.on('on-event', e => console.log('on', e));
observer.notify('on-event', 2)
observer.notify('on-event', 3)
console.log('--->');
observer.once('on-event', e => console.log('once', e));
observer.notify('on-event', 2)
observer.notify('on-event', 3)
