// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user( username, password,sex,birthday,userphone,mymoney,myscore) values ( ?, ?, ?, ?,?,?,?)',
        finduser:'SELECT * FROM user WHERE username=?',
        
        
    }
}

module.exports = sqlMap;