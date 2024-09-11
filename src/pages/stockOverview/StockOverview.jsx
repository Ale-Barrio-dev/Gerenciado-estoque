import { Link, Outlet, useLocation } from "react-router-dom";

export default function StockOverview() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="containerStockLinks">
        <Link
          className={`links ${pathname === "/items" ? "active" : ""}`}
          to="/items"
        >
          Todos os itens
        </Link>

        <Link
          className={`links ${pathname === "/items/new" ? "active" : ""}`}
          to="/items/new"
        >
          Novo item
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
