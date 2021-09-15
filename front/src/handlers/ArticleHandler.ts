import { Article, NewArticle } from "../interfaces/Article";

const initialArticles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.34, qty: 110 },
  { id: "a2", name: "Tournevis cruciforme", price: 4.25, qty: 30 },
  { id: "a3", name: "Pelle", price: 7.1, qty: 50 },
];

function generateId() {
  return Date.now() + "_" + Math.floor(Math.random() * 1e6);
}

class ArticleHandler {
  articles = this.getArticles();
  add(newArticle: NewArticle) {
    const article = { ...newArticle, id: generateId() };
    this.articles.push(article);
    this.save();
  }

  getArticles(): Article[] {
    const str = localStorage.getItem("articles");
    if (!str) {
      return initialArticles;
    }
    return JSON.parse(str);
  }

  save() {
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }
}

export const articleHandler = new ArticleHandler();
