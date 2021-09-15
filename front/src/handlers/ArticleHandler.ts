import { Subject } from "rxjs";
import { Article, NewArticle } from "../interfaces/Article";

const initialArticles: Article[] = [];

class ArticleHandler {
  articles = this.getArticles();
  setArticles = (articles: Article[]) => {};
  articles$ = new Subject<Article[]>();

  constructor() {
    this.refresh();
  }

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
      this.save();
      // on envoie un evenement ecoute par le composant app.
      this.setArticles(this.articles);
      this.articles$.next(this.articles);
    } catch (err) {
      console.error("err: ", err);
    }
  }

  register(setArticles: any) {
    this.setArticles = setArticles;
  }

  add(newArticle: NewArticle) {
    (async () => {
      try {
        const response = await fetch("http://localhost:3333/api/articles", {
          method: "POST",
          body: JSON.stringify(newArticle),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status >= 400) {
          console.error("repsonse: ", response);
          throw new Error("oups. error " + response.status);
        }
      } catch (err) {
        console.error("err: ", err);
      } finally {
        await this.refresh();
      }
    })();
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
    this.articles$.next(this.articles);
    const ids = [...selectedArticles].map((a) => a.id);
    (async () => {
      try {
        const response = await fetch("http://localhost:3333/api/articles", {
          method: "DELETE",
          body: JSON.stringify(ids),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status >= 400) {
          console.error("repsonse: ", response);
          throw new Error("oups. error " + response.status);
        }
      } catch (err) {
        console.error("err: ", err);
      } finally {
        await this.refresh();
      }
    })();
  }

  save() {
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }
}

export const articleHandler = new ArticleHandler();
