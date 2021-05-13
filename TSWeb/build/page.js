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
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    // import 语法
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
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
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
