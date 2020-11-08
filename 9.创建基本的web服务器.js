// 1. 导入http 模块
// const http = require("http");
const http = require('http')
// 2. 创建 web 服务器实例
// const server = http.createServer();
const server = http.createServer()
// 3. 为服务器实例绑定 request 事件 监听客户端的请求  req 请求对象 res  响应对象
// server.on("request", function (req, res) {
//   console.log("someone visit our web  server");
// });
server.on('request',function(req,res){
  console.log('顺丰到付咖啡店');
  // text/plain  <= 如果没有Content-Type
  res.setHeader('Content-Type','text/html; charset=utf-8')
  res.end('我说好的')
})
//4. 启动服务器  8080端口
// server.listen(8080, function () {
//   console.log("server running at  http://127.0.0.1:8080");
// });
server.listen(3000,function(){
  console.log('server running at http://127.0.0.1:3000');
})


