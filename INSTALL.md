
# Angular使用指南


## 软件安装
1. [JDK 1.7+](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

2. [Node.js](https://nodejs.org/en/download/current/ "请下载自己相对应的位数的版本, 使用版本6以上")
    ### 安装与配置
    1. 安装路径改为C:\Users\用户目录\nodejs\
        例如：C:\Users\Yayun.Xiong\nodejs\
    2. 设置全局安装路径与缓存路径
        npm config set prefix "C:\nodejs\node_global"
        npm config set cache "C:\nodejs\node_cache"
    3. 检查是否设置成功
        npm config get prefix
        npm config get cache
    4. 新增环境变量
        NODE_PATH
        C:\Users\用户目录\nodejs;C:\nodejs\node_global
    5. 编辑Path环境变量(新增)
        ;%NODE_PATH%;

3. [Git](https://git-scm.com/downloads "请下载自己相对应的位数的版本")
    ### 安装与配置
    1. 默认安装
    2. 新增环境变量(注意路径)
        Git_PATH
        C:\Users\用户目录\AppData\Local\Programs\Git\cmd
    3. 编辑Path环境变量(新增)
        ;%Git_PATH%;

4. [TortoiseGit](https://tortoisegit.org/download/ "请下载自己相对应的位数的版本")

5. [Visual Studio Code](http://code.visualstudio.com/Download "请下载自己相对应的位数的版本")



## Visual Studio Code插件安装
1. Eclipse Keymap
2. TypeScript Importer
3. vscode-icons
4. TSLint
5. ESLint
6. EditorConfig for Visual Studio Code
7. Debugger for Chrome
8. Angular Files
9. Auto Close Tag
10. Auto Rename Tag
11. Npm Dependency
12. psioniq File Header


## Angular环境准备

### 全局安装typeScript、tslint、eslint
```
npm install -g typescript tslint eslint
```

### 全局安装@Angular/cli

#### 安装
```
npm install -g @angular/cli@latest
```

#### 更新
##### Global package:
```
npm uninstall -g @angular/cli
npm cache clean
# if npm version is > 5 then use `npm cache verify` to avoid errors (or to avoid using --force)
npm install -g @angular/cli@latest
```

##### Local project package:
```
rm -rf node_modules dist # use rmdir /S/Q node_modules dist in Windows Command Prompt; use rm -r -fo node_modules,dist in Windows PowerShell
npm install --save-dev @angular/cli@latest
npm install
```

## Git账号申请
* 请联系管理员
http://10.253.46.121:10101/

* 申请SSH Key（咨询）
ssh-keygen -t rsa -C "申请人邮箱"

一路回车，获取id_rsa.pub值并设置


## 获取最新源代码
使用自己账号登录http://10.253.46.121:10101/在版本库中获取相对应的地址
推荐使用TortoiseGit下的ssh方式

## 下载依赖包
使用cmd命令进入克隆的目录
```
npm install
```

## 运行
```
npm run serve
# or
ng serve
```
