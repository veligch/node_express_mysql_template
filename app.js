const express = require('express');
const db = require('./db/db');

// 导入路由模块
const loginRouter = require('./routes/auth');

db(() => {
  const app = express();

  // 使用路由 
  app.use(loginRouter);

  app.listen(3000, () => {
    console.log('服务启动了')
  });
});

