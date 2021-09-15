import cors from "cors";
import express from "express";
import serveIndex from "serve-index";
import { Article, NewArticle } from "./../front/src/interfaces/Article";

const app = express();
const port: number = 3333;
const publicDir = "../front/build";

let articles: Article[] = [
  { id: "a1", name: "Tournevis xxx", price: 12.34, qty: 110 },
  { id: "a2", name: "Tournevis cruciforme", price: 4.25, qty: 30 },
];

function generateId() {
  return Date.now() + "_" + Math.floor(Math.random() * 1e6);
}

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/api/date", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.use("/api", (req, res, next) => {
  setTimeout(() => {
    next();
  }, 2000);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.post("/api/articles", (req, res) => {
  const newArticle = req.body as NewArticle;
  const article = {
    ...newArticle,
    id: generateId(),
  };
  articles.push(article);
  res.status(201).json(article);
});

app.delete("/api/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

app.use(express.static(publicDir));
app.use(serveIndex(publicDir));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
