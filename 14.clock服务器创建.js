//创建http
const http = require("http");
// 创建文件系统模块
const fs = require("fs");
// 创建路径处理模块
const path = require("path");
// 创建 web 服务器
const server = http.createServer();

// 为服务器绑定request事件
server.on("request", function (req, res) {
  // res.setHeader("Content-Type", "text/html; charset=utf8");
  let fapth = "";
  if (req.url === "/") {
    fapth = path.join(__dirname, './clock/index.html');
  } else {
    fapth = path.join(__dirname, "./clock", req.url);
  }

  fs.readFile(fapth, "utf8", function (err, dataStr) {
    if (err) return res.end('404 Not fount');
    res.end(dataStr);
  });
});

server.listen(8080, () =>
  console.log("server running at http://127.0.0.1:8080")
);
