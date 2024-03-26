const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

module.exports = (data, expiresIn) => {
  if (!expiresIn) {
    // token 过期时间
    expiresIn = 60 * 60 * 24 * 7
  }

  return jwt.sign(data, SECRET, { expiresIn })
}