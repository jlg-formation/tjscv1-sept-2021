import { Link } from "react-router-dom";
import "./List.scss";

function List() {
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
            <tr>
              <td className="name">Tournevis</td>
              <td className="price">2.45 €</td>
              <td className="qty">110</td>
            </tr>
            <tr>
              <td className="name">Tournevis cruciforme</td>
              <td className="price">3.10 €</td>
              <td className="qty">45</td>
            </tr>
            <tr>
              <td className="name">Pelle</td>
              <td className="price">7.10 €</td>
              <td className="qty">20</td>
            </tr>
            <tr>
              <td className="name">Pince</td>
              <td className="price">12.00 €</td>
              <td className="qty">30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default List;
