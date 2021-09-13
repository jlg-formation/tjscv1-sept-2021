const express = require("express");
const serveIndex = require("serve-index");

const app = express();
const port = 3333;

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/api/date", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.use(express.static("."));
app.use(serveIndex("."));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
