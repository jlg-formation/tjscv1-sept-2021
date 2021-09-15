const fs = require("fs");

const readdir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });
};

const readFile = (filename, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, options, (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    });
  });
};

console.time("truc");
readdir(".")
  .then((files) => {
    console.timeLog("truc");
    console.log("files: ", files);
    return readFile(files[0], { encoding: "utf-8" });
  })
  .then((content) => {
    console.log("content: ", content);
    console.log("end");
  })
  .catch((err) => {
    console.log("err: ", err);
  });
