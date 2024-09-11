import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="containerNav">
      <h2 className="titleNav">Gerenciador de estoque</h2>
      <div className="containerBtn">
        <Link to="/" className="btnNav">
          Inicio
        </Link>
        <Link to="/items" className="btnNav">
          Estoque
        </Link>
      </div>
    </nav>
  );
}
