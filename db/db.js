module.exports = (success) => {
  const connection = require('./connection');

  // 连接数据库
  connection.connect((err) => {
    // 连接失败
    if (err) throw err;
  });

  // 连接成功
  console.log('数据库连接成功');
  success();
}