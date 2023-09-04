/**
 * 策略模式
 *
 * 解释：定义一系列的算法，将他们封装起来，并且使得他们可以互相替换。
 */
class Woman {
  getName() {
    return "woman";
  }
}

class Man {
  getName() {
    return "man";
  }
}

class People {
    people = null;

    setPeople (people) {
        this.people = people;
    }

    getName () {
        return this.people.getName();
    }
}


const x = new People();
x.setPeople(new Man());
console.log(x.getName()); // man
x.setPeople(new Woman());
console.log(x.getName()); // woman

// ========================== JS中的策略模式（用于替换大量的 if-else ） ============================
const who = {
    'man': {
        show: () => console.log('i am man')
    },
    'woman': {
        show: () => console.log('i am woman')
    },
    'none': {
        show: () => console.log('i am none')
    }
}

function show (who, type) {
    who[type].show();
}

show(who, 'man');
show(who, 'woman');
show(who, 'none');