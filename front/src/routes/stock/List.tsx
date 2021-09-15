import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, MouseEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { articleHandler } from "../../handlers/ArticleHandler";
import { Article } from "../../interfaces/Article";
import "./List.scss";

function List() {
  const [articles, setArticles] = useState([] as Article[]);
  const [selectedArticles, setSelectedArticles] = useState(new Set<Article>());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useEffect start");
    const subscription = articleHandler.articles$.subscribe({
      next: (articles) => {
        console.log("articles: ", articles);
        setLoading(false);
        setArticles(articles);
      },
    });

    const errorSub = articleHandler.error$.subscribe({
      next: (error) => {
        setError(error);
      },
    });
    return () => {
      console.log("useEffect cleanup");
      subscription.unsubscribe();
      errorSub.unsubscribe();
    };
  });

  function toggle(a: Article) {
    return (event: MouseEvent<HTMLElement>) => {
      const newSelectedArticles = new Set(selectedArticles);
      console.log("toggle: ", a, event);
      newSelectedArticles.has(a)
        ? newSelectedArticles.delete(a)
        : newSelectedArticles.add(a);

      setSelectedArticles(newSelectedArticles);
    };
  }

  function remove() {
    console.log("remove");
    articleHandler.remove(selectedArticles);
    setSelectedArticles(new Set());
    setArticles([...articleHandler.articles]);
  }

  return (
    <main className="List">
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <Link to="/stock/add">
            <button aria-label="Ajouter">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Link>
          {selectedArticles.size > 0 && (
            <button onClick={remove} aria-label="Supprimer">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          )}
        </nav>
        <table>
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="name">loading...</td>
                <td className="price">...</td>
                <td className="qty">...</td>
              </tr>
            ) : (
              articles.map((a) => (
                <tr
                  key={a.id}
                  onClick={toggle(a)}
                  className={selectedArticles.has(a) ? "selected" : ""}
                >
                  <td className="name">{a.name}</td>
                  <td className="price">{a.price} €</td>
                  <td className="qty">{a.qty}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {error !== "" && <div className="error">error...: {error}</div>}
      </div>
    </main>
  );
}

export default List;
