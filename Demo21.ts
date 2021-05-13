// 类中泛型

// 初始类的泛型
class SelectGirl<T> {
    constructor(private girls: T[]) {}
    getGirl(index: number): T {
        return this.girls[index]
    }
}

const selectGirl = new SelectGirl< string >(['大脚', '刘英'])
console.log(selectGirl.getGirl(1))

// 泛型中的继承
interface Girl {
    name: string
}

class SelectGirl1<T extends Girl> {
    constructor(private girls: T[]) {}
    getGirl(index: number): string {
        return this.girls[index].name
    }
}

const selectGirl1 = new SelectGirl1([
    { name: "大脚" },
    { name: "刘英" },
    { name: "晓红" },
]);
console.log(selectGirl1.getGirl(1))

// 泛型约束
// 使用关键字extends来进行约束
class SelectGirl2<T extends number | string> {
    constructor(private girls: T[]) {
    }
    getGirl(index: number): T {
        return this.girls[index]
    }
}

const selectGirl2 = new SelectGirl2<string>(['大脚', '刘英'])
console.log(selectGirl2.getGirl(1))
