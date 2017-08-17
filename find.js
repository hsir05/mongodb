
var User = require('./user.js');

function findByConditions(){
  var wherestr = {'username':'刘德华'};
  User.find(wherestr,function(err,res){
    if(err){
      console.log('err' + err);
    }else{
      console.log('success find' + res)
    }
  });
}

findByConditions()