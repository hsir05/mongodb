//引入modul的实例
var User = require('./user');


//创建一个插入数据到数据库的函数
function insert() {
    var date = [{
            username: '张三',
            password: '123456',
            age: 40,
            logindate: new Date()
        },
        {
            username: '李四',
            password: '9876564',
            age: 30,
            logindate: new Date()
        },
        {
            username: '王五',
            password: '9876541230',
            age: 12,
            logindate: new Date()
        }
    ]


    for (let i = 0; i < date.length; i++) {
        //用model创建Entity实体，就是一个User的数据
        var user_1 = new User(date[i]);
        //调用User_1的save方法，将user——1的数据到数据库中
        user_1.save(function(err, res) {
            if (err) {
                console.log('err' + err)
            } else {
                console.log('success' + res)
            }
        })
    }


}
insert()
