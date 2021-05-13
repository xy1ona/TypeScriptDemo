// 类的访问类型

// 三种访问类型private、protected、public

//public 允许在类的内部和外部被调用
//private 只允许在类的内部被调用，外部不允许调用
//protected 允许在类内及继承的子类中使用
class Person {
    public name: string;
    public sayHello() {
        console.log(this.name+ 'say hi')
    }
}

class Teacher extends Person {
    public sayBye() {
        console.log(this.name)
    }
}

//-------以下属于类的外部--------
const person = new Person()
person.name = 'lili'
person.sayHello()
console.log(person.name)
