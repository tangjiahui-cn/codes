/**
 * 工厂模式
 * 
 * 解释：创建多个不同的对象
 */
class A {
  name = "a";
  show() {
    console.log("->", this.name);
  }
}

class B {
  name = "b";
  show() {
    console.log("->", this.name);
  }
}

class C {
  name = "c";
  show() {
    console.log("->", this.name);
  }
}

function Factory(name) {
  switch (name) {
    case "A":
      return new A();
    case "B":
      return new B();
    case "C":
      return new C();
  }
}

Factory("A").show();
Factory("B").show();
Factory("C").show();
