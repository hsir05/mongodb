
[TOC]

## mongoose 数据库连接测试

**一.新建项目**

1. 新建空文件夹
2. 启动终端，进入该文件夹
3. 在命令行安如下步骤操作

  1. 项目初始化
  ```
  npm init
  ```
  2. 下载依赖包
```
  npm i  mongoose -s
```
**二.连接数据库**

在根目录下创建文件`db.js`,输入一下代码，监听连接事件，根据具体情况，设置不同情况的处理方式，最后，导出`mongoose`供其他模块使用！

```
var mongoose = require("mongoose");
var DB_URL = 'mongodb://localhost:27017/test'

//连接数据库
mongoose.connect(DB_URL);

//连接成功输出语句
mongoose.connection.on('connected',function(){
  console.log('连接成功！！！'+DB_URL);
})
//连接异常输出错误原因
mongoose.connection.on('error', function(){
  console.log(err + DB_URL);
})
//连接断开后输出语句
mongoose.connection.on('disconnected',function(){
  console.log('连接已断开!!! '+DB_URL);
})
//导出monogoose对象
module.exports = mongoose;
```

**数据库连接成功！**

`数据库地址:**`mongodb://localhost:27017/test`

[参考文章](http://www.vince.studio/2017/07/10/%E3%80%8C%E5%85%A8%E6%A0%88%E5%88%9D%E6%8E%A2%E3%80%8D-Mongoose%E7%9A%84%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8/)
