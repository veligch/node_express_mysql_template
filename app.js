const express = require('express');
const db = require('./db/db');

// 导入路由模块
const loginRouter = require('./routes/user/index');

db(() => {
  const app = express();

  // 使用路由 
  app.use('/user', loginRouter);

  app.listen(3000, () => {
    console.log('服务启动了')
  });
});

