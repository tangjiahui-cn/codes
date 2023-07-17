/**
 * 单例模式
 * 
 * 解释：只需要一个对象
 */

class Single {
    ins = null;

    static getIns () {
        if (this.ins) return this.ins;
        return this.ins = {};
    }
}

console.log(Single.getIns() === Single.getIns()) // true