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
//  switch (act){
//  	case "add":
//  		conn.query(sql,[params.username, params.password,params.massage],function(err,result){
//  			if (err) {
//  				console.log(err)
//  			}
//  			if (result) {
//  				res.end(result)
//  			}
//  		});
// 
//  		break;
//  	default:
//  		break;
//  };
	conn.query('SELECT * FROM user WHERE username='+usernames+'', function(err, rows,result) {
        if (err) {
            console.log(err);                                                                                 
        }
        if (result) {
            res.send('{"err":"用户已存在"}')
        }
    })
//  conn.query(sql, [params.username, params.password,params.sex,params.birthday,params.userphone,params.mymoney,params.myscore], function(err, result) {
//      if (err) {
//          console.log(err);                                                                                 
//      }
//      if (result) {
//          res.send('{"err":1}')
//      }
//  })
});

module.exports = router;