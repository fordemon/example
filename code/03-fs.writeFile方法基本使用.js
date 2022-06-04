const fs = require('fs');
fs.writeFile("./files/03.txt", "哈哈哈哈",err => {
    if(err){
        return console.log("写入文件失败" + err.message);
    }
})