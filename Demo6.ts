// 数组类型和注解方法

const numberArray: number[] = [1,2,3]
const stringArray: string[] = ['a', 'b', 'c']
const undefinedArray: undefined[] = [undefined, undefined, null]
const arr: (number | string)[] = [1, 'string', 2]

// type alias 类型别名

type Lady = {name:string, age:number}

class Madam {
    name: string;
    age:number
}
const xiaojiejies: Madam[] = [
    {name: '刘英', age: 18},
    {name: '刘英1', age: 19},
]
