var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/addUser', function(req,res) {
    var sql = $sql.user.add;
    var finduser = $sql.user.finduser;
    var params = req.body;
    var act = params.type;
    var usernames = params.username;
    console.log(params);
	conn.query('SELECT * FROM user WHERE username='+usernames+'', function(err, rows,result) {
        if (rows == "") {
            console.log(err); 
                conn.query(sql, [params.username, params.password,params.sex,params.birthday,params.userphone,params.mymoney,params.myscore], function(err, result) {
			      if (err) {
			          console.log(err);                                                                                 
			      }
			      if (result) {
			          res.send('{"err":1}')
			      }
			  })
        }else {
	        res.send('{"err":"用户已存在"}');
           
        }
    })

});
//登录查找
router.post('/findUser', function(req,res) {
//  var sql = 0$sql.user.add;
//  var finduser = $sql.user.finduser;
    var params = req.body;
    var act = params.type;
    var usernames = params.username;
    var passwords = params.password;
//  console.log(params);
	conn.query('SELECT * FROM user WHERE userphone='+usernames+' and password='+passwords+'', function(err, rows,result) {
        if (rows == "" || rows == undefined) {
//          console.log(err); 
            res.send('{"err":0}');    
        }else {
	        res.send(rows);
//	        res.send('{"err":1}');
            console.log(rows);
        }
    })

});
//手机登录
router.post('/findUserp', function(req,res) {
//  var sql = $sql.user.add;
//  var finduser = $sql.user.finduser;
    var params = req.body;
    var act = params.type;
    var usernames = params.username;
    var passwords = params.password;
//  console.log(params);
	conn.query('SELECT * FROM user WHERE userphone='+usernames+' ', function(err, rows,result) {
        if (rows == "" || rows == undefined) {
//          console.log(err); 
            res.send('{"err":0}');    
        }else {
	        res.send(rows);
//	        res.send('{"err":1}');
            console.log(rows);
        }
    })

});
//个人中心
router.post('/findUsermsg', function(req,res) {
//  var sql = $sql.user.add;
//  var finduser = $sql.user.finduser;
    var params = req.body;
    var act = params.type;
    var userid = params.userid;
//  var passwords = params.password;
//  console.log(params);
	conn.query('SELECT * FROM user WHERE userid='+userid+' ', function(err, rows,result) {
        if (rows == "" || rows == undefined) {
//          console.log(err); 
            res.send('{"err":0}');    
        }else {
	        res.send(rows);
//	        res.send('{"err":1}');
            console.log(rows);
        }
    })

});
//修改个人资料
router.post('/changeuser', function(req,res) {
    var params = req.body;
    var userid = params.userid;
    var username = params.username;
    var sex = params.sex;
    var birthday = params.birthday;
	conn.query("UPDATE user SET sex='"+sex+"',username='"+username+"',birthday='"+birthday+"'  WHERE userid='"+userid+"'", function(err, rows,result) {
         
        if (rows == "" || rows == undefined) {


            res.send('{"err":0}');    
        }else {
//	        res.send(rows);
	        res.send('{"err":1}');
            console.log(rows);
        }
    })

});
//修改手机号
router.post('/changephone', function(req,res) {
    var params = req.body;
    var userid = params.userid;
    var userphone = params.userphone;
    
	conn.query("UPDATE user SET userphone='"+userphone+"'  WHERE userid='"+userid+"'", function(err, rows,result) {
         
        if (rows == "" || rows == undefined) {


            res.send('{"err":0}');    
        }else {
//	        res.send(rows);
	        res.send('{"err":1}');
            console.log(rows);
        }
    })

});


//地址查找
router.post('/findaddress', function(req,res) {
    var params = req.body;
    var userid = params.userid;
  console.log(params);
	conn.query("SELECT * FROM address WHERE userid='"+userid+"'", function(err, rows,result) {
        if (rows == "" || rows == undefined) {

            res.send('{"err":0}');    
        }else {
	        res.send(rows);
//	        res.send('{"err":1}');
            console.log(rows);
        }
    })

});



//新增地址
router.post('/upaddress', function(req,res) {
	var upadd = $sql.user.upadd;
    var params = req.body;
    var userid = params.userid;
  console.log(params);
	conn.query(upadd,[params.userid,params.takename,params.takearea,params.detailaddress,params.phone], function(err, rows,result) {
        if (rows == "" || rows == undefined) {

            res.send('{"err":0}');    
        }else {
	        res.send(rows);
//	        res.send('{"err":1}');
            console.log(rows);
        }
    })

});

//修改密码
router.post('/changepassword', function(req,res) {
    var params = req.body;
    var userid = params.userid;
    var password = params.password;
    
	conn.query("UPDATE user SET password='"+password+"'  WHERE userid='"+userid+"'", function(err, rows,result) {
         
        if (rows == "" || rows == undefined) {


            res.send('{"err":0}');    
        }else {
//	        res.send(rows);
	        res.send('{"err":1}');
            console.log(rows);
        }
    })

});








//首页获取数据
router.post('/indexCons',function(req,res){
	conn.query('SELECT * FROM commodity', function(err,rows){
		if (rows=="" || rows == undefined) {
			res.send('{"err":0}')
		} else{
			res.send(rows);
		}
	})
});





//首页获取数据
router.post('/indexCons',function(req,res){
	conn.query('SELECT * FROM commodity', function(err,rows){
		if (rows=="" || rows == undefined) {
			res.send('{"err":0}')
		} else{
			res.send(rows);
		}
	})
});



module.exports = router;