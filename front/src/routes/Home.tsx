import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Gérer efficacement votre stock !</h1>
      <Link to="/stock">
        <button>Voir le stock</button>
      </Link>
    </main>
  );
}

export default Home;
