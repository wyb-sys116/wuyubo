// Vercel Serverless Function 入口
// 把 Express app 直接导出给 Vercel 调用
const app = require('../server/server');

module.exports = app;
