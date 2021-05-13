// 函数的参数和返回类型的注解

function getTotal(one: number, two: number): number {
    return one + two
}
const total = getTotal(1,2)

function sayHello(): void {
    console.log('Hello Word')
}

function errorFun(): never {
    throw new Error()
    console.log('Hello Word')
}

function forNever(): never {
    while (true) {}
    console.log('Hello Word')
}

function add({one, two} : {one:number, two: number}) {
    return one + two
}
const totalAdd = add({one: 1, two:2})

function getNumber({one} : {one:number}) {
    return one
}
const one = getNumber({one:3})
