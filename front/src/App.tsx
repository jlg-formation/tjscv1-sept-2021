import { createContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { articleHandler } from "./handlers/ArticleHandler";
import { Article } from "./interfaces/Article";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export const ArticleContext = createContext({
  articles: articleHandler.articles,
  setArticles: (articles: Article[]) => {},
});

function App() {
  const [articles, setArticles] = useState(articleHandler.articles);
  articleHandler.register(setArticles);
  return (
    <ArticleContext.Provider value={{ articles, setArticles }}>
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </ArticleContext.Provider>
  );
}

export default App;
