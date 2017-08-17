
var User = require('./user.js');

function update(){
  //wherestr是我们要进行操作的数据
  var wherestr = {'username': '刘德华'};
  //update 是我们更新的数据
  var updatestr = {'password' : '987654321'}

  User.update(wherestr,updatestr,function(err,res){
    if(err){
      console.log('err' + err);
    }else{
      console.log('success' + res)
    }
  })
}
update();