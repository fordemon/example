const fs = require('fs')

// fs.readFile('./files/1.txt', 'utf-8', (err, res) => {
//   if (err) return console.log(err.message)

//   console.log(res)
// })
fs.readFile(__dirname + "/files/1.txt", "utf8", (err, res) => {
  if (err) return console.log("读取文件失败！" + err);
  console.log("读取文件成功！" + res);
  const pathSTrs = path.join(__dirname,"../")
});