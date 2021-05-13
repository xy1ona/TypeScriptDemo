// 类的构造函数
//构造函数就是在类被初始化的时候，自动执行的一个方法

class Person {
    // public name: string;
    // constructor(name) {
    //     this.name = name
    // }
    constructor(public name: string) {}
}

// 继承
class Teacher extends Person {
    constructor(public age: number) {
        // 在子类中使用构造函数需要用super()调用父类的构造函数
        // 父类没有构造函数，子类也要使用super()进行调用，否则就会报错
        // 父类构造函数默认 为空 constructor() {}
        super('lili1');
    }
}
const teacher = new Teacher(18)
console.log(teacher.name)
console.log(teacher.age)
