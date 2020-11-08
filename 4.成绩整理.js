// 1.导入fs模板操作文件
// const fs = require('fs')

// // 调用fs.readFile()方法 读取文件
// fs.readFile('.files/4.txt', 'utf8', function (err, dataStr) {
//     if (err) { 
//         return console.log('读取文件失败！'+  err.message);
//     }
//     console.log('读取文件成功！'+ dataStr);
// })

const fs = require('fs');
const { networkInterfaces } = require('os');

fs.readFile('./files/4.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }

    // 将成绩的数据  按照空格进行分割  变成数组
    const arrOld = dataStr.split(' ')
    console.log(arrOld);
    // foreach 循环
    let arrNew = []
    arrOld.forEach(item => arrNew.push(item.replace('=', ':')))
    let network = arrNew.join('\r\n')
    // console.log(network);

    // 5. 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
    fs.writeFile('./files/5demo.txt', network, function(err){
        if(err) return console.log('写入失败！'+ message);
        console.log('写入成功!');
    })
})

