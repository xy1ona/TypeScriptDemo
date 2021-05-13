// 命名空间-Namespace
// namespace components {
//     // 子命名空间
//     export namespace SubComponents {
//         export class Test {}
//     }
//
//     export class Header {
//         constructor() {
//             const elem = document.createElement('div');
//             elem.innerText = 'header'
//             document.body.appendChild(elem)
//         }
//     }
//
//     export class Content {
//         constructor() {
//             const elem = document.createElement('div');
//             elem.innerText = 'content'
//             document.body.appendChild(elem)
//         }
//     }
//
//     export class Footer {
//         constructor() {
//             const elem = document.createElement('div');
//             elem.innerText = 'footer'
//             document.body.appendChild(elem)
//         }
//     }
// }

// import 语法
export class Header {
    constructor() {
        const elem = document.createElement('div');
        elem.innerText = 'header'
        document.body.appendChild(elem)
    }
}

export class Content {
    constructor() {
        const elem = document.createElement('div');
        elem.innerText = 'content'
        document.body.appendChild(elem)
    }
}

export class Footer {
    constructor() {
        const elem = document.createElement('div');
        elem.innerText = 'footer'
        document.body.appendChild(elem)
    }
}
