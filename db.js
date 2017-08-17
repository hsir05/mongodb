/*
*Create by skills on 2017/8/14
*monogoose 测试连接
*
*/
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