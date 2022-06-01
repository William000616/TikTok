var mysql = require('mysql')

// 创建一个连接池
var pool = mysql.createPool({
    host: 'localhost', // ip
    user: 'root', // 用户名
    password: '123456', // 密码
    database: 'tiktok' // 数据库名称
});


// 导出查询相关  
var query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                // 释放连接  *注意：释放连接要在 conn.query*   
                conn.release();
                // 事件驱动回调    
                callback(qerr, vals, fields);
            });
        }
    });
};

module.exports = query; 