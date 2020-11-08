// 这个包的入口文件
const date = require('./src/dataFormat')
const escap = require('./src/htmlEscape')


// 向外暴露需要的成员
module.exports = {
    ...date,
    ...escap
};
