const fs = require("fs");

try {
  console.time("truc");
  const files = fs.readdirSync(".");
  console.timeLog("truc");
  console.log("files: ", files);
  const content = fs.readFileSync(files[0], { encoding: "utf-8" });
  console.log("content: ", content);
} catch (err) {
  console.log("err: ", err);
}
