const a = 18;
const b = 2;

// module.exports 是内置的对象
// module.exports.username = 'ifer'
const sum = (a, b) => a + b;

module.exports.sum = sum
module.exports.a = a

// 模块作用域 ； 防止了全局变量污染的问题

