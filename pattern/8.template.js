/**
 * 模板模式
 *
 * 解释：通过封装变化提高系统扩展性。（即提供一个对外的接口，让子类去实现具体的内容）
 */

function Template(options) {
  var step1 =
    options.step1 ||
    (() => {
      throw new Error("缺少 Step1");
    });
  var step2 =
    options.step2 ||
    (() => {
      throw new Error("缺少 Step2");
    });
  var step3 =
    options.step3 ||
    (() => {
      throw new Error("缺少 Step3");
    });

  return class {
    init() {
      step1();
      step2();
      step3();
    }
  };
}

const A = Template({
  step1: () => console.log("A step1"),
  step2: () => console.log("A step2"),
  step3: () => console.log("A step3"),
});

const B = Template({
  step1: () => console.log("B step1"),
  step2: () => console.log("B step2"),
  step3: () => console.log("B step3"),
});

const a = new A();
const b = new B();
a.init();
b.init();

// A step1
// A step2
// A step3
// B step1
// B step2
// B step3
