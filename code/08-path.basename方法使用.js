const path = require("path");

const fpath = "/a/b/c/index.html";
const fullName = path.basename(fpath)
console.log(fullName);
console.log(path.basename(fpath,'.js'));
const nameWithoutExt = path.basename(fullName,".html")
console.log(nameWithoutExt);

