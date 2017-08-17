var User = require('./user.js');
function del(){
  //需要删除的数据
  var wherestr = {'username' : '刘德华'};

  User.remove(wherestr,function(err,res) {
    if(err){
      console.log('err' + err);
    }else{
      console.log('success remove' + res )
    }
  })
}

del()