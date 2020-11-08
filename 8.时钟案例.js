// 1. 导入 fs文件系统模块
const fs = require("fs");

// 2. 导入 path 路径处理模块
const path = require("path");

//1.3 定义正则表达式 分别匹配<style></style> 和 <script></script> 标签
// /s 空白字符 /S空白字符 /* 匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/;
// 1.4 匹配 script  标签的正则
const regScript = /<script>[\s\S]*<\/script>/;

//2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, "../素材/index.html"),"utf8",(err, dataStr) => {
    // 2.2 读取html文件失败
    if (err) return console.log("读取index.html失败！" + err.message);
    // 2.3 读取文件成功 拆解 html css  js
    resolveHtml(dataStr);
    resolveCss(dataStr);
    resolveJs(dataStr);
  }
);

// 3.1 处理css样式
function resolveCss(htmlStr) {
  //3.2 使用正则提取需要的内容  g全局匹配 *?贪婪模式 \逆转符号
  const r1 = regStyle.exec(htmlStr)[0].replace(/<[\s\S]*?>/g, "");
  // console.log(r1);
  // 调用获得的样式 利用fs.writeFile方法 到入到  clock的 index.css样式
  fs.writeFile(path.join(__dirname, "./clock/index.css"), r1, (err) => {
    if (err) return console.log("获取css样式失败！" + err.message);
    console.log("写入css样式成功");
  });
}

// 3.2 处理js脚本
function resolveJs(htmlStr) {
  //3.2 使用正则提取需要的内容  g全局匹配 *?贪婪模式 \逆转符号
  const r2 = regScript.exec(htmlStr)[0].replace(/<[\s\S]*?>/g, "");
  // console.log(r1);
  // 调用获得的样式 利用fs.writeFile方法 到入到  clock的 index.css样式
  fs.writeFile(path.join(__dirname, "./clock/index.js"), r2, (err) => {
    if (err) return console.log("获取js脚本失败！" + err.message);
    console.log("写入js脚本成功");
  });
}

// 3.3 处理html结构
function resolveHtml(htmlStr) {
    // console.log(htmlStr);
// 3.3 replace代替 外联的样式 js 代替 内联的样式 js
  const r3 = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
    .replace(regScript, '<script src="./index.js"></script>');
//   console.log(r3);
// 调用获得的样式 利用fs.writeFile方法 到入到  clock的 index.css样式
  fs.writeFile(path.join(__dirname, "./clock/index.html"), r3, (err) => {
    if (err) return console.log("获取html结构失败！" + err.message);
    console.log("写入html结构成功");
  });
}
