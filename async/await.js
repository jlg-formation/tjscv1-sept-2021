const { readdir, readFile } = require("fs").promises;

(async () => {
  try {
    console.time("truc");
    const files = await readdir(".");
    console.timeLog("truc");
    console.log("files: ", files);
    const content = await readFile(files[0], { encoding: "utf-8" });
    console.log("content: ", content);
  } catch (err) {
    console.log("err: ", err);
  }
})();
