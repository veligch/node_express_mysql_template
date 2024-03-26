const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

// 校验 token 的中间件
module.exports = (req, res, next) => {
  // 获取 token
  const token = req.get('token');

  // 检验是否存在 token
  if (!token) {
    return res.json({
      code: '2003',
      msg: 'token 缺失',
      data: null
    })
  }

  // 校验 token
  jwt.verify(token, SECRET, (err, data) => {
    // 失败
    if (err) {
      return res.json({
        code: '2004',
        msg: 'token 校验失败',
        data: null
      })
    }

    // 成功
    next()
  })
}