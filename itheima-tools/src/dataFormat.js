// 定义一个格式化时间的函数
function dataFormat(dataStr) {
  let data = new Date(dataStr);
  let y = data.getFullYear();
  let m = (data.getMonth() + 1).toString().padStart(2, 0);
  let d = data.getDate().toString().padStart(2, 0);

  let h = data.getHours().toString().padStart(2, 0);
  let mm = data.getMinutes().toString().padStart(2, 0);
  let ss = data.getSeconds().toString().padStart(2, 0);

  return `${y}-${m}-${d} ${h}:${mm}:${ss}`;
}

module.exports = {
  dataFormat
};
