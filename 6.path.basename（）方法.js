const fs = require('fs');
const path = require ('path')

// 定义文件的存放路径
const fpath  = '/a/b/c/index.html'

// path.basename(value)  path 路径模块的bassname方法  获取到文件名称的部分
const fullName = path.basename(fpath)
console.log(fullName); 

// 第二次获取 会去掉文件的拓展名
const newWithout = path.basename(fpath,'.html')
console.log(newWithout);