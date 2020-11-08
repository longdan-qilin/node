const path = require('path')


// path.extname() 可以获取路径中拓展名部分

const fpath = '/a/b/c/index.html'
const fpekd = path.extname(fpath)
console.log(fpekd); // 输出 .html