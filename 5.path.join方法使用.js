// 路径处理模块
const path = require('path')
// 文件系统模块
const fs = require('fs')

// ../ 会抵消前面的路径 ./表示当前的路径
const pathStr2 = path.join('/a','/b/c','../../','./d','e')
//  2个../ 抵消了'/b/c'  相当于执行 ('/a','./d','e')
console.log(pathStr2);

fs.readFile(__dirname + '/files/1.txt','utf8',function(err,datastr){
    if(err) return console.log(err.message);
    console.log(datastr);
})