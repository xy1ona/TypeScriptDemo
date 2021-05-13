// 类的 Getter、Setter 和 static 使用

class XiaoJieJie {
    constructor(private _age: number) {}
    // _age是私有的,那类的外部就没办法获取。用getter属性进行获取
    get age() {
        return this._age - 10
    }
    // _age是私有的，那类的外部就没办法改变，用setter属性进行改变
    set age(age) {
        this._age = age + 3
    }
}

const dajiao = new XiaoJieJie(18)
dajiao.age = 25
console.log(dajiao.age)

//不想new出对象，而直接使用这个方法，用static声明的属性和方法，不需要进行声明对象，就可以直接使用
class Girl{
    static sayLove() {
        return 'love u'
    }
}

// const girl = new Girl()
// console.log(girl.sayLove())
console.log(Girl.sayLove())
