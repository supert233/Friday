// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user( username, password,sex,birthday,userphone,mymoney,myscore) values ( ?, ?, ?, ?,?,?,?)',
        finduser:'SELECT * FROM user WHERE username=?',
        upadd: 'insert into address( userid, takename,takearea,detailaddress,phone) values ( ?, ?, ?, ?,?)',
        
        
    }
}

module.exports = sqlMap;