import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/assets/logo.svg" alt="Gestion Stock" />
        <span>Gestion Stock</span>
      </Link>
    </header>
  );
}

export default Header;
