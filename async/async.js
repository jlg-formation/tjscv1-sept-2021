const fs = require("fs");

console.time("truc");
fs.readdir(".", (err, files) => {
  if (err) {
    console.log("err: ", err);
    return;
  }
  console.timeLog("truc");
  console.log("files: ", files);

  fs.readFile(files[0], { encoding: "utf-8" }, (err, content) => {
    if (err) {
      console.log("err: ", err);
      return;
    }
    console.log("content: ", content);
  });
});
console.log("end");
