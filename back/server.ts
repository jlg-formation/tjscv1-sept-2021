import cors from "cors";
import express from "express";
import serveIndex from "serve-index";
import { Article } from "./../front/src/interfaces/Article";

const app = express();
const port: number = 3333;
const publicDir = "../front/build";

const articles: Article[] = [
  { id: "a1", name: "Tournevis xxx", price: 12.34, qty: 110 },
  { id: "a2", name: "Tournevis cruciforme", price: 4.25, qty: 30 },
];

app.use(cors());

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/api/date", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use(express.static(publicDir));
app.use(serveIndex(publicDir));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
