import app from "./app";
import * as open from "open";
import config from './config';
import Logger from './loaders/logger';
const expressSwagger = require('express-swagger-generator')(app)
expressSwagger(config.options)

// 引入测试数据
const test = require("./router/api/test")

app.get('/getApi', (req, res) => {
  test.testGetApi(req, res)
})

app.listen(config.port, () => {
  Logger.info(`
    ################################################
    🛡️  Swagger文档地址: http://localhost:${config.port} 🛡️
    ################################################
  `);
}).on('error', err => {
  Logger.error(err);
  process.exit(1);
});

open(`http://localhost:${config.port}`);  // 自动打开默认浏览器