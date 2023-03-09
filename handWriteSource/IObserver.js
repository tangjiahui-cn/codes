/**
 * 发布 - 订阅
 * 
 * At 2023/03/09
 * By TangJiaHui
 */

const Observer = {
    msg: {},
    on (id, fn) {
        if (this.msg[id]) {
            this.msg[id].push(fn)
        } else {
            this.msg[id] = [fn]
        }
    },
    notify (id, payload) {
        if (this.msg[id]) {
            this.msg[id].forEach(fn => fn?.(payload))
        }
    },
    remove (id) {
        delete this.msg[id]
    }
}

Observer.on('test', (payload) => {
    console.log('test --> ', payload)
})

Observer.notify('test', {name: 'tjh'})
Observer.remove('test')
Observer.notify('test', {name: 'tjh'})

