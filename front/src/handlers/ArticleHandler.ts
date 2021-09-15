import { Article, NewArticle } from "../interfaces/Article";

const initialArticles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.34, qty: 110 },
  { id: "a2", name: "Tournevis cruciforme", price: 4.25, qty: 30 },
  { id: "a3", name: "Pelle", price: 7.1, qty: 50 },
];

let seq = 3;

function generateId() {
  seq++;
  return "a" + seq;
}

class ArticleHandler {
  articles = initialArticles;
  add(newArticle: NewArticle) {
    const article = { ...newArticle, id: generateId() };
    this.articles.push(article);
  }
}

export const articleHandler = new ArticleHandler();
