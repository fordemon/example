const fs = require("fs");
fs.readFile("./files/成绩.txt", "utf8", (err, res) => {
    if (err) return console.log("文件复去失败！" + err.message);
    const arrOld = res.split(" ");
    const arrNew = [];
    arrOld.forEach((item) => {
        arrNew.push(item.replace("=", ":"));
    });
    const newStr = arrNew.join("\r\n");
    fs.writeFile("./files/成绩-ok.txt", newStr, (err) => {
        if (err) return console.log("写入成绩失败！" + err.message);
        console.log("写入成绩成功！");
    });
});