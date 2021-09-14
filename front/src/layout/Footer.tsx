import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <Link to="/legal">Mentions Légales</Link>
    </footer>
  );
}

export default Footer;
