// 基础静态类型和对象类型

const count: number = 918;
const myName: string = 'lili';
// null, undefined, boolean, void, symbol

// 对象类型
const xiaojiejie: {
    name: string,
    age: number
} = {
    name: 'li',
    age: 18
}

// 数组类型
const xiaojiejies: string [] = ['amy', 'mary', 'coco']

// 类类型
class Person{}
const dajia: Person = new Person()

// 函数类型
const jianxiaojiejie: ()=> string =() => {return 'dajiao'}
