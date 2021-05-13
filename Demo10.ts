// 类的概念和使用

class Lady {
    content = 'hi'
    sayHello() {
        return this.content
    }
}

// 继承
class XiaoJieJie extends Lady{
    // 重写
    // sayHello() {
    //     return 'hi honey'
    // }
    // super关键字 它代表父类中的方法
    sayHello() {
        return super.sayHello()+' honey'
    }
    sayLove() {
        return 'love you'
    }
}

const goddess = new XiaoJieJie()
console.log(goddess.sayHello())
console.log(goddess.sayLove())



