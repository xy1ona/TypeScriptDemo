// interface 接口

interface Girl {
    name: String;
    age: number;
    bust: number;
    waistline ?: number; // ?可选值
    [propname: string]: any; //任意值，string类型
    say(): string;
}

// 接口间的继承
interface Teacher extends Girl {
    teach(): string
}

// 接口和类的约束
class XiaoJieJie implements Girl {
    name = '刘英'
    age = 18
    bust = 90
    say() {
        return 'hi'
    }
}

const girl = {
    name: '大脚',
    age: 18,
    bust: 94,
    waistline: 90,
    sex: '女',
    say() {
        return 'Hello World'
    },
    teach() {
        return '老师'
    }

}

const screenResume = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + '你被淘汰'));
}

// const getResume = (girl: Girl) => {
//     console.log(girl.name+'年龄是'+girl.age)
//     console.log(girl.name+'胸围是'+girl.bust)
//     girl.waistline && console.log(girl.name+'腰围是'+girl.waistline)
//     girl.sex && console.log(girl.name+'性别是'+girl.sex)
//     girl.say()
// }
const getResume = (girl: Teacher) => {
    console.log(girl.name+'年龄是'+girl.age)
    console.log(girl.name+'胸围是'+girl.bust)
    girl.waistline && console.log(girl.name+'腰围是'+girl.waistline)
    girl.sex && console.log(girl.name+'性别是'+girl.sex)
    girl.say()
}
screenResume(girl)
getResume(girl)
