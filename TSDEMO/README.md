1，打开终端，运行npm init -y,创建package.json文件。
2，终端中运行tsc -init,生成tsconfig.json文件。
3，新建src和build文件夹，再建一个index.html文件。
4，在src目录下，新建一个page.ts文件，这就是我们要编写的ts文件了。
5，配置tsconfig.json文件，设置outDir和rootDir，也就是设置需要编译的文件目录，和编译好的文件目录。
6，然后编写index.html，引入<script src="./build/page.js"></script>。
7，编写page.ts文件，加入一句输出console.log('jspang.com'),再在控制台输入tsc,就会生成page.js文件，
8，再到浏览器中查看index.html文件，如果按F12可以看到jspang.com，说明我们的搭建正常了。
