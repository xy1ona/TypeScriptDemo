// 函数泛型

// 泛型：[generic - 通用、泛指的意思],那最简单的理解，泛型就是泛指的类型。 <>（尖角号）进行定义

function join<Lili>(first: Lili, second: Lili) {
    return `${first}${second}`
}

// string类型
join < string > ('li ', 'hi')

// number类型
join < number > (1, 2);


// 泛型中数组的使用
//经常使用<T>来作泛型的表示

// function myFun<ANY>(params: ANY[]) {
//     return params
// }

function myFun<ANY>(params: Array<ANY>) {
    return params;
}
myFun < string > (['123', '145'])

// 多个泛型的定义
// 第一个泛型用T,第二个用P代表

function joins<T, P>(first: T, second: P) {
    return `${first}${second}`
}
joins<number, string>(1, '2')








