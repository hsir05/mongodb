var mongoose = require('./db.js');

var Schema = mongoose.Schema;

//创建一个实例
var UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    age: { type: Number },
    logindate: { type: Date }
})

//利用UserSchema的实例，发布一个User的model的实例并且导出
module.exports = mongoose.model("User", UserSchema);