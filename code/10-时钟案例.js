const fs = require('fs');
const path = require('path');
// const regStyle = /<style>[\s\S]*<\/style>/;
// const regScript = /<script>[/s/S]*<\/script>/;
fs.readFile(
    path.join(__dirname, "../素材/index.html"),
    "utf-8",
    (err, res) => {
        if (err) return console.log("读取HTML失败" + err.message);
        resolveCSS(res);
        resolveJS(res);
        resolveHTML(res);
        // console.log("读取HTML成功:" + res);
    }
)
const regCSS = /<style>[\w\W]*<\/style>/
const regJS = /<script>[\w\W]*<\/script>/
function resolveCSS(htmlStr) {
    const r1 = regCSS.exec(htmlStr);
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
        if (err) return console.log('写入css失败' + err.message);
        console.log('CSS写入文件成功');
    })
}
function resolveJS(htmlStr) {
    const r2 = regJS.exec(htmlStr)
    const newJS = r2[0].replace("<script>", "").replace("</script>", "");
    fs.writeFile(
        path.join(__dirname, "./clock/index.js"),
        newJS,
        "utf-8",
        (err) => {
            if (err) return console.log("JS写入失败!" + err.message);
            console.log("JS写入文件成功");
        }
    )
}
function resolveHTML(htmlStr) {
    const newHTML = htmlStr
    .replace(regCSS,'<link rel="stylesheet" href="./index.css">')
    .replace(regJS,'<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname,'./clock/index.html'), newHTML,err => {
        if(err) {
            return console.log('写入HTML失败' + err.message);
        }
        console.log('写入HTML成功');
    })
}