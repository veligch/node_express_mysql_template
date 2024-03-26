const express = require('express');
const router = express.Router();
// 数据库
const connection = require('../db/connection');
// 工具函数
const setToken = require('../utils/setToken');
const md5 = require('md5');
// 解析请求体的中间件
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// 登录接口
router.post('/login', jsonParser, (req, res) => {
  const { username, password } = req.body;

  // sql 语句
  const sql = `
    SELECT 
      *
    FROM 
      users 
    WHERE 
      username='${username}' AND password='${md5(password)}'
  `;
  // 数据库查询
  connection.query(sql, (err, data) => {
    // 查询错误
    if (err) {
      return res.json({
        code: '1001',
        msg: '数据库查询错误',
        data: null
      })
    };

    // 没有数据
    if (!data) {
      return res.json({
        code: '1002',
        msg: '用户名或密码错误',
        data: null
      })
    }

    // 登录成功
    const token = setToken({
      username: data[0].username,
      uid: data[0].uid
    })
    res.json({
      code: '0000',
      msg: '登录成功',
      data: {
        token,
        nickname: data[0].nickname
      }
    })
  });
});


module.exports = router;