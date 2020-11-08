const  http = require('http')
const server = http.createServer()
// req 是请求对象 包含了与客户端相关的数据和属性
server.on('request',(req,res) => {
    res.setHeader('Content-Type','text/html; charset=utf8')
    if(req.method === 'GET') {
        if(req.url === '/') {
            res.end('欢迎来到首页')
        } else if(req.url === '/news') {
            res.end('欢迎来到新闻')
        } else {
            res.end('找不到页面, 404')
        }
    } else {
        res.end('老铁你发的是POST请求')
    }
    // const str = `Your request url is ${url}, and request method is ${method}`
    // console.log(str);
    // 调用 res.end() 方法，向客户端响应一些内容
    // res.end(str)
})

server.listen(8080,() => {
    console.log('server running at http://127.0.0.1:8080');
})