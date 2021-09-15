import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, MouseEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { articleHandler } from "../../handlers/ArticleHandler";
import { Article } from "../../interfaces/Article";
import "./List.scss";
import { ArticleContext } from "../../App";

function List() {
  const { articles, setArticles } = useContext(ArticleContext);
  const [selectedArticles, setSelectedArticles] = useState(new Set<Article>());

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
            {articles.map((a) => (
              <tr
                key={a.id}
                onClick={toggle(a)}
                className={selectedArticles.has(a) ? "selected" : ""}
              >
                <td className="name">{a.name}</td>
                <td className="price">{a.price} €</td>
                <td className="qty">{a.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default List;
