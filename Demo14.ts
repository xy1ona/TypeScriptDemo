// 类的只读属性和抽象类

class Person {
    // 只读属性
    public readonly _name: string
    constructor(name: string) {
        this._name = name
    }
}

const person = new Person('lili')
console.log(person._name)


// 抽象类
abstract class Girl {
    abstract skill() // 因为没有具体的方法，所以我们这里不写括号
}

class Waiter extends Girl{
    skill() {
        console.log('倒水')
    }
}

class BaseTeacher extends Girl{
    skill() {
        console.log('按摩')
    }
}

class SeniorTeacher extends Girl{
    skill() {
        console.log('SPA')
    }
}
