// Enum 枚举类型讲解

// 枚举类型的对应值
enum Status {
    MESSAGE = 1, // 默认从 0 开始, 设置成从 1 开始
    SPA,
    RUN
}

function geServe(status: any) {
    if(status === Status.MESSAGE) {
        return 'message'
    }else if(status === Status.SPA) {
        return 'spa'
    }else if(status === Status.RUN) {
        return 'run'
    }
}

const result = geServe(1);

// 枚举通过下标反查
console.log(Status.MESSAGE, Status[1])
