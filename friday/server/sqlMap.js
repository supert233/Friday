// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into text(id, username, password,massage) values (0, ?, ?, ?)',
        
    }
}

module.exports = sqlMap;