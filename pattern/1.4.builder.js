/**
 * 建造者模式
 * 
 * 解释：将复杂对象的构建与表示分离，允许只需要指定对象类型和内容即可构建，不用指定内部具体细节构造。
 */

class PeopleBuilder {
  constructor ({name, age, sex}) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  // 长大一岁
  overYear () {
    this.age += 1;
  }
}

const people = new PeopleBuilder({
  name: 'tjh',
  age: 24,
  sex: 'man'
})

people.overYear();

console.log(people.age); // 25
