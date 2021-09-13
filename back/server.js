const express = require("express");
const serveIndex = require("serve-index");

const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
