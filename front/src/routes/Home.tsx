import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <main className="Home">
      <h1>Gérer efficacement votre stock !</h1>
      <Link to="/stock">
        <button>Voir le stock</button>
      </Link>
    </main>
  );
}

export default Home;
