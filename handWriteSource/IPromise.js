/**
 * 手写Promise
 * 
 * At 2023/03/01
 * By TangJiaHui
 * Tips: 支持多级异步
 */


const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}

const isPromise = v => v?._status
class IPromise {
    _status = STATUS.PENDING
    _value = undefined
    _fulfilledQueue = []
    _rejectedQueue = []

    constructor(exec) {
        try {
            exec?.(this._resolve?.bind(this), this._reject?.bind(this))
        } catch (e) {
            this._reject?.bind(this)
        }
    }

    _resolve(v) {
        if (this._status !== STATUS.PENDING) return

        if (isPromise(v)) {
            // 使用箭头函数，this作用域为当前promise
            v.then(resolveValue => this._resolve(resolveValue), this._reject.bind(this))
        } else {
            this._value = v
            this._status = STATUS.FULFILLED
            this._fulfilledQueue.forEach(fn => fn?.(this.value))
        }
    }

    _reject(v) {
        if (this._status !== STATUS.PENDING) return
        this._value = v
        this._status = STATUS.REJECTED
        this._rejectedQueue.forEach(fn => fn?.(this.value))
    }

    then(resolveThen, rejectThen) {
        return new IPromise((resolveNext, rejectNext) => {

            const fulfilled = () => {
                const v = resolveThen(this._value)
                if (isPromise(v)) {
                    v.then(resolveNext, rejectNext)
                    return
                }
                resolveNext(v)
            }

            const rejected = () => {
                const v = rejectThen(this._value)
                if (isPromise(v)) {
                    v.then(resolveNext, rejectNext)
                    return
                }
                rejectNext(v)
            }

            switch (this._status) {
                case STATUS.PENDING:
                    this._fulfilledQueue.push(fulfilled)
                    this._rejectedQueue.push(rejected)
                    break;
                case STATUS.FULFILLED:
                    fulfilled()
                    break;
                case STATUS.REJECTED:
                    rejected()
                    break;
            }
        })
    }
}


// 测试代码
new IPromise(resolve => {
    setTimeout(() => {
        const t = new IPromise(res => {
            const y = new IPromise(res => {
                setTimeout(() => res(2000), 500)
            })
            return res(y)
        })
        resolve(t)
    }, 1000);
}).then(res => {
    console.log('1 -> ', res) // 1 -> 2000
    return new IPromise(res => {
        setTimeout(() => {
            return res(1000)
        }, 1000)
    })
}).then(res => {
    console.log('2 -> ', res) // 2 -> 1000
    return res
}).then(res => {
    console.log('3 -> ', res) // 3 -> 1000
})
