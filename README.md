# react-webpack
基于webpack手工搭建react环境

## 启动 ##
    npm run start
    
## 搭建过程中遇到的问题 ## 
  error Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style
#出现原因：eslint配置了换行必须使用LF，Windows下的编辑器里需要设置使用LF换行
		eslint配置文件中关闭掉这个错误就行了， "linebreak-style":[0]
```javascript
  module.exports = {
    extends: 'google',
      quotes: [2, 'single'],
      globals: {
      SwaggerEditor: false
      },
      env: {
      browser: true
      },
      rules:{
      "linebreak-style": 0
	    }
  }
```
# 搭建步骤简述 #
1. npm init 项目初始化，生成一个package.json
2. 安装webpack 
 ```javascript
    npm install webpack webpack-dev-server --save-dev
```

3. 安装Babel 
```javascript
    npm install babel-core babel-preset-es2015 babel-preset-react --save-dev
```
4. 配置Babel 见工程下的.babelrc
```javascript
  {
    "presets": ["es2015", "react"]
  }
```
5.安装ESLint
```javascript
  npm install eslint@3.19.0 install eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --save-dev
```
6.  配置ESLint 详细见工程的.eslintrc.js 
7. 安装webpack loader
```javascript
 npm install eslint-loader install babel-loader style-loader css-loader less-loader sass-loader file-loader url-loader --save-dev
```
8. 安装webpack plugin
```javascript
npm install html-webpack-plugin uglifyjs-webpack-plugin --save-dev
 ```
9. 配置webpack 详细看文件夹webpack.config.js
10. 安装核心功能包
```javascript
npm install react react-dom redux redux-actions react-redux react-router react-router-redux redux-devtools --save
 ```
11. 创建项目入口模块 根目录下创建src目录-->新建/src/index.jsx：
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function Index() {
    return (
      <div className="container">
        <h1>Hello React!</h1>
      </div>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));

export default Index;
 ```
12. 创建渲染页面 在src下的templates文件中创建index.html-->/scr/templates/index.html
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
 ```
