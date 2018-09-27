# CXX

查看模块版本信息
npm view 模块 versions

查看当前模块过时情况
npm outdated

https://github.com/angular/angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 零碎记录
[]。 这是从模型到视图的单向数据绑定。属性绑定
()。 这是从视图到模型的反向单向数据绑定。事件绑定
[()] 来标记出双向数据绑定和双向数据流。
{{模板表达式}}：模板表达式不能引用全局命名空间中的任何东西。 不能引用window或document。不能调用console.log或Math.max。 它们被局限于只能访问来自表达式上下文中的成员。

@Injectable() 标识一个类可以被注入器实例化。 通常，在试图实例化没有被标识为@Injectable()的类时，注入器会报错


## Rxjs Observable
interval操作符返回一个在规定的毫秒间隔时间内产生增加数的Observable
map是用的最多的序列转化操作符。它需要一个Observable和一个函数，并且把函数应用于源Observable的每一个值。它返回一个新的转化后值的Observable


// tsconfig.json
// "noUnusedParameters": true,
    // "noUnusedLocals": true,


## 代理配置
参考：https://webpack.github.io/docs/webpack-dev-server.html#proxy

"/ks-main/": {
    "target": {
        "host": "10.253.41.75",
        "protocol": "http:",
        "port": 8888
    },
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug",
    "proxyTimeout": 5000
}

"/fis/": {
    "target": "http://10.253.41.75:8888/ks-main/fis",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": {
        "^/fis/": ""
    }
}

this.router.navigate([{outlets: {popup: ['message', this.id]}}]).then(_ => {
   // navigation is done
  });


<a [routerLink]="['/', {outlets: {popup: ['message', this.id]}}]">Edit</a>

一个Component只能在一个declarations中定义，需要使用多个Component的时候，使用module导入


什么是Subject？ 在RxJS中，Subject是一类特殊的Observable，它可以向多个Observer多路推送数值。普通的Observable并不具备多路推送的能力（每一个Observer都有自己独立的执行环境），而Subject可以共享一个执行环境。
Subject是一种可以多路推送的可观察对象。与EventEmitter类似，Subject维护着自己的Observer

switchMap操作符允许你在当前Observable的当前值上执行一个动作，并将它映射为一个新的Observable.

@ViewChild(MyCom) 可以获取到页面中的MyCom类型的组件
@ViewChild('myCom') 可以获取到被标记为#myCom的组件


-------------------------------------------------------------------

package依赖包版本

在讲解如何升级之前，先来了解下npm管理依赖包中存在的几个标点符号。

只有版本号

package.json中，版本号如下： 
“@angular/core”: “2.0.1” ====> 安装指定版本

符号 ^

举栗子： “@angular/core”: “^2.0.1” 
====> 安装该版本以及比该版本更新的版本， 如： 2.0.1 , 2.0.2, 2.1.0, 2.7.0 
但是，3开头的不可以

符号 ~

举栗子： “@angular/core”: “~2.0.1” 
====> 只能安装 2.0.1， 2.0.2， 。。。。 2.0.9 
但是, 2.1.0不可以

符号 >= <=

更有者，可以使用如下形式： >= … <= 
“@angular/core”: “>=2.0.1<=3.0.0”

-------------------------------------------------------------------



"build:ts": "ngc -p tsconfig.json",
"build:js": "tsc --outDir js --declaration --declarationDir types",
"build:aot": "ngc -p tsconfig.json && rollup -c rollup-config.js",
"lint:ts": "tslint --type-check --project tsconfig.json src/**/*.ts",
"prepublish": "tsc",
"tsc": "tsc",
"rmdir": "rmdir /S /Q node_modules dist",
"ng": "ng",
"serve": "ng serve",
"start": "ng serve --proxy-config proxy.conf.json",
"build": "ng build --prod --progress",
"test": "ng test",
"e2e": "ng e2e"

----------------------------------------------------------------------

无法连接到运行中的进程，将在10000毫秒后超时 - （原因：无法连接到目标：connect ECONNREFUSED 127.0.0.1:9222）

如果出现以上错误，请停掉浏览器代理


.angular-cli.json文件
在"scripts"添加中
"../node_modules/zone.js/dist/zone.js",
才不会在IE9中报Angular requires Zone.js prolyfill.
但是IE9中问题一大堆，不建议支持IE9

