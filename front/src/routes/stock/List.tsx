import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { articleHandler } from "../../handlers/ArticleHandler";
import { Article } from "../../interfaces/Article";
import "./List.scss";

function List() {
  const [articles] = useState(articleHandler.articles);

  function toggle(a: Article) {
    return (event: MouseEvent<HTMLElement>) => {
      console.log("toggle: ", a, event);
    };
  }

  return (
    <main className="List">
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <Link to="/stock/add">
            <button>Ajouter</button>
          </Link>
          <button>Supprimer</button>
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
              <tr key={a.id} onClick={toggle(a)}>
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
