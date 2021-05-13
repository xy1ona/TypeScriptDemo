// 命名空间-Namespace
// namespace Home {
//     export class Page {
//         constructor() {
//             new components.Header();
//             new components.Content();
//             new components.Footer();
//         }
//     }
// }


// import 语法
import { Header, Content, Footer } from "./components";
export default class Page {
    constructor() {
        new Header();
        new Content();
        new Footer();
    }
}

