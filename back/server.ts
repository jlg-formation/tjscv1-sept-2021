const express = require("express");
const serveIndex = require("serve-index");

const app = express();
const port = 3333;
const publicDir = "../front/build";

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/api/date", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.use(express.static(publicDir));
app.use(serveIndex(publicDir));

app.listen(port, () => {
  console.log(`Example app 
  
  listening at http://localhost:${port}`);
});
