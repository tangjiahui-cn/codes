/**
 * 命令模式
 * 
 * 解释：用来执行某些事情的指令。
 * 常见于：有时候需要向某些对象发送请求，却不知道请求接收者是谁，也不知道执行操作是什么
 */

const commandA = {
  execute: () => console.log("execute: a."),
};
const commandB = {
  execute: () => console.log("execute: b."),
};
const commandC = {
  execute: () => console.log("execute: c."),
};


const command = (function () {
    return {
        list: [],
        add (executor) {
            this.list.push(executor);
        },
        execute () {
            this.list.forEach(x => x.execute())
        }
    }
})();

command.add(commandA);
command.add(commandB);
command.add(commandC);
command.execute();
