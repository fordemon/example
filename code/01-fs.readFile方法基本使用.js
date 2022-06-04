const fs = require("fs")
fs.writeFile("./files/2.txt","此刻大幕降临", err => {
    // 
    if(err) {
        return console.log("读取文件失败：" + err.message);
        
    }
    console.log("读取文件成功");
});