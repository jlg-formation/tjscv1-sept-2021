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

  async refresh() {
    try {
      const response = await fetch("http://localhost:3333/api/articles");
      if (response.status >= 400) {
        console.error("repsonse: ", response);
        throw new Error("oups. error " + response.status);
      }
      const articles: Article[] = await response.json();
      console.log("articles: ", articles);
      this.articles = articles;
      // on envoie un evenement ecoute par le composant.
    } catch (err) {
      console.error("err: ", err);
    }
  }

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

  remove(selectedArticles: Set<Article>) {
    this.articles = this.articles.filter((a) => !selectedArticles.has(a));
    this.save();
  }

  save() {
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }
}

export const articleHandler = new ArticleHandler();
