// 联合类型和类型保护

interface Waiter {
    anjiao: boolean;
    say: () => {};
}

interface Teacher {
    anjiao: boolean;
    skill: () => {}
}

// 联合类型，可以认为一个变量可能有两种或两种以上的类型, 关键符号是|(竖线)
function judgeWho(animal: Waiter | Teacher) {
    // 类型保护-类型断言
    if(animal.anjiao) {
        (animal as Teacher).skill();
    }else {
        (animal as Waiter).say();
    }

    // 类型保护-in 语法
    if('skill' in animal) {
        animal.skill();
    }else {
        animal.say()
    }
}

// 类型保护-typeof 语法
function add(first: string | number, second: string | number) {
    if(typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`;
    }
    return first + second;
}

// 类型保护-instanceof 语法, 只能用在类上
class NumberObj {
    count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    if(first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}
